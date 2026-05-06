import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogOut, Moon, Sun, RotateCcw, AlertTriangle } from 'lucide-react';
import type { AppSettings } from '../types';
import { supabase } from '../lib/supabaseClient';

interface Props {
  open: boolean;
  settings: AppSettings;
  onClose: () => void;
  onUpdate: (updates: Partial<AppSettings>) => void;
  onResetBoard: () => void;
}

export function SettingsDrawer({ open, settings, onClose, onUpdate, onResetBoard }: Props) {
  const [confirmReset, setConfirmReset] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const toggleSchoolMode = () => {
    onUpdate({ school_mode_enabled: !settings.school_mode_enabled });
  };

  const handleReset = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    onResetBoard();
    setConfirmReset(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={() => { setConfirmReset(false); onClose(); }}
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="
              fixed right-0 top-0 bottom-0 w-80 max-w-[90vw]
              bg-white/95 backdrop-blur-xl z-50
              shadow-2xl border-l border-white/60
              flex flex-col
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-safe pb-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Settings</h2>
              <button
                onClick={() => { setConfirmReset(false); onClose(); }}
                className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 active:scale-95 transition-all"
                aria-label="Close settings"
              >
                <X size={18} className="text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">

              {/* School Mode toggle */}
              <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
                      {settings.school_mode_enabled ? (
                        <Sun size={18} className="text-amber-600" />
                      ) : (
                        <Moon size={18} className="text-gray-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">School Mode</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Shows school lunch &amp; lunchbox reminder on weekdays
                      </p>
                    </div>
                  </div>
                  <button
                    role="switch"
                    aria-checked={settings.school_mode_enabled}
                    onClick={toggleSchoolMode}
                    className={`
                      relative w-12 h-6 rounded-full transition-colors duration-200 flex-shrink-0
                      ${settings.school_mode_enabled ? 'bg-amber-400' : 'bg-gray-300'}
                    `}
                  >
                    <motion.div
                      animate={{ x: settings.school_mode_enabled ? 24 : 2 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm"
                    />
                  </button>
                </div>
                <div className="mt-3 text-xs text-gray-500 border-t border-amber-100 pt-3">
                  <p><strong>ON</strong> — shows school-day section Monday–Friday</p>
                  <p className="mt-1"><strong>OFF</strong> — hides school section (e.g. school holidays)</p>
                </div>
              </div>

              {/* Reset today's board */}
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Today's board
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  Clears all ticked tasks and the dinner plan for today. Use if someone ticked things by mistake.
                </p>
                <button
                  onClick={handleReset}
                  className={`
                    flex items-center gap-2 w-full px-4 py-3 rounded-xl
                    font-semibold text-sm transition-all duration-150 active:scale-[0.98]
                    ${confirmReset
                      ? 'bg-orange-500 text-white border-2 border-orange-500'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600'
                    }
                  `}
                >
                  {confirmReset
                    ? <><AlertTriangle size={15} /> Tap again to confirm reset</>
                    : <><RotateCcw size={15} /> Reset today's board</>
                  }
                </button>
                {confirmReset && (
                  <button
                    onClick={() => setConfirmReset(false)}
                    className="mt-2 text-xs text-gray-400 w-full text-center"
                  >
                    Cancel
                  </button>
                )}
              </div>

              {/* Team info */}
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Teams</p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-amber-600 w-14 flex-shrink-0">Team A:</span>
                    <span>Dad (Dimuth) ★, Yuvin, Shenara</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-violet-600 w-14 flex-shrink-0">Team B:</span>
                    <span>Mum (Nishadi) ★, Senuk, Yeshara</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Teams alternate daily based on the calendar date.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-safe pb-6 border-t border-gray-100 pt-4">
              <button
                onClick={handleSignOut}
                className="
                  flex items-center gap-3 w-full px-4 py-3 rounded-2xl
                  bg-red-50 border border-red-100
                  text-red-600 font-semibold text-sm
                  hover:bg-red-100 active:scale-[0.98] transition-all duration-150
                "
              >
                <LogOut size={16} />
                Sign out
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
