import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './lib/supabaseClient';
import { getMelbourneDate, isWeekday } from './lib/dateUtils';
import { getTeamsForDate } from './lib/teamLogic';
import type { DailyBoard, AppSettings } from './types';

import { LoginForm } from './components/LoginForm';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { TeamOverviewCard } from './components/TeamOverviewCard';
import { DinnerCard } from './components/DinnerCard';
import { KitchenClearingCard } from './components/KitchenClearingCard';
import { SchoolDayCard } from './components/SchoolDayCard';
import { CelebrationBanner } from './components/CelebrationBanner';
import { SettingsDrawer } from './components/SettingsDrawer';

const DEFAULT_BASE_DATE = '2024-01-01'; // Team A cooks on this date

// ─── Loading screen ──────────────────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className="text-4xl"
      >
        🍳
      </motion.div>
      <p className="text-sm font-medium text-gray-500">Loading today's board…</p>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [board, setBoard] = useState<DailyBoard | null>(null);
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const celebrationShown = useRef(false);

  // ── Auth listener ────────────────────────────────────────────────────────
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) setLoading(false);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        setBoard(null);
        setSettings(null);
        setLoading(false);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  // ── Load settings after auth ─────────────────────────────────────────────
  useEffect(() => {
    if (!session) return;
    loadSettings();
  }, [session]);

  // ── Load board after settings ────────────────────────────────────────────
  useEffect(() => {
    if (!session || !settings) return;
    loadBoard(settings.base_team_a_dinner_date ?? DEFAULT_BASE_DATE);
  }, [session, settings?.id]);

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('app_settings')
        .select('*')
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') throw error;

      if (!data) {
        const { data: created, error: createErr } = await supabase
          .from('app_settings')
          .insert({
            school_mode_enabled: true,
            base_team_a_dinner_date: DEFAULT_BASE_DATE,
          })
          .select()
          .single();
        if (createErr) throw createErr;
        setSettings(created);
      } else {
        setSettings(data);
      }
    } catch (err) {
      console.error('loadSettings error:', err);
      setError('Could not load settings. Check your Supabase setup.');
      setLoading(false);
    }
  };

  const loadBoard = async (baseDate: string) => {
    try {
      const today = getMelbourneDate();
      const teams = getTeamsForDate(today, baseDate);

      const { data, error } = await supabase
        .from('daily_boards')
        .upsert(
          {
            board_date: today,
            dinner_team: teams.dinnerTeam,
            clearing_team: teams.clearingTeam,
            dinner_plan: '',
            dinner_prep_done: false,
            dinner_cook_done: false,
            dinner_serve_done: false,
            dishwasher_emptied_done: false,
            dishwasher_loaded_done: false,
            kitchen_reset_done: false,
            mum_school_lunch_done: false,
          },
          { onConflict: 'board_date', ignoreDuplicates: true }
        )
        .select()
        .single();

      if (error) {
        // Row already exists — fetch it
        const { data: existing, error: fetchErr } = await supabase
          .from('daily_boards')
          .select('*')
          .eq('board_date', today)
          .single();
        if (fetchErr) throw fetchErr;
        setBoard(existing);
      } else {
        setBoard(data);
      }
    } catch (err) {
      console.error('loadBoard error:', err);
      setError('Could not load today\'s board. Check your Supabase setup.');
    } finally {
      setLoading(false);
    }
  };

  // ── Realtime subscription ────────────────────────────────────────────────
  useEffect(() => {
    if (!board?.id) return;

    const channel = supabase
      .channel(`board-${board.id}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'daily_boards',
          filter: `id=eq.${board.id}`,
        },
        (payload) => {
          setBoard(payload.new as DailyBoard);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [board?.id]);

  // ── Update helpers ───────────────────────────────────────────────────────
  const updateBoard = useCallback(
    async (updates: Partial<DailyBoard>) => {
      if (!board) return;
      const prev = board;
      setBoard((b) => (b ? { ...b, ...updates } : b)); // optimistic
      const { error } = await supabase
        .from('daily_boards')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', board.id);
      if (error) {
        console.error('updateBoard error:', error);
        setBoard(prev); // revert
      }
    },
    [board]
  );

  const updateSettings = useCallback(
    async (updates: Partial<AppSettings>) => {
      if (!settings) return;
      setSettings((s) => (s ? { ...s, ...updates } : s)); // optimistic
      const { error } = await supabase
        .from('app_settings')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', settings.id);
      if (error) console.error('updateSettings error:', error);
    },
    [settings]
  );

  // ── Derived state ────────────────────────────────────────────────────────
  const schoolDay = settings?.school_mode_enabled === true && isWeekday();

  const tasks = board
    ? [
        board.dinner_prep_done,
        board.dinner_cook_done,
        board.dinner_serve_done,
        board.dishwasher_emptied_done,
        board.dishwasher_loaded_done,
        board.kitchen_reset_done,
        ...(schoolDay ? [board.mum_school_lunch_done] : []),
      ]
    : [];

  const completedCount = tasks.filter(Boolean).length;
  const totalCount = tasks.length;
  const allDone = totalCount > 0 && completedCount === totalCount;

  // Show confetti exactly once per "all done" event
  if (allDone && !celebrationShown.current) {
    celebrationShown.current = true;
  }
  if (!allDone && celebrationShown.current) {
    celebrationShown.current = false;
  }

  // ── Render ───────────────────────────────────────────────────────────────
  if (!session) return <LoginForm />;
  if (loading) return <LoadingScreen />;

  if (error) {
    return (
      <div className="min-h-svh flex items-center justify-center px-6">
        <div className="glass rounded-3xl p-8 max-w-sm text-center">
          <div className="text-4xl mb-3">⚠️</div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">Setup needed</h2>
          <p className="text-sm text-gray-600 mb-4">{error}</p>
          <p className="text-xs text-gray-400">
            Check your .env file and Supabase tables, then refresh.
          </p>
        </div>
      </div>
    );
  }

  if (!board || !settings) return <LoadingScreen />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-svh"
    >
      <div className="max-w-xl mx-auto px-4 pt-safe pb-safe">
        <Header onSettingsClick={() => setSettingsOpen(true)} />

        <div className="mt-4 space-y-0">
          <ProgressBar completed={completedCount} total={totalCount} />

          {allDone && <CelebrationBanner />}

          <TeamOverviewCard board={board} />
          <DinnerCard board={board} onUpdate={updateBoard} />
          <KitchenClearingCard board={board} onUpdate={updateBoard} />

          {schoolDay && <SchoolDayCard board={board} onUpdate={updateBoard} />}
        </div>
      </div>

      <SettingsDrawer
        open={settingsOpen}
        settings={settings}
        onClose={() => setSettingsOpen(false)}
        onUpdate={updateSettings}
      />
    </motion.div>
  );
}
