import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Flame, Utensils, Pencil } from 'lucide-react';
import type { DailyBoard } from '../types';
import { TEAM_A_MEMBERS, TEAM_B_MEMBERS } from '../types';
import { MemberChip } from './MemberChip';
import { TaskTile } from './TaskTile';

interface Props {
  board: DailyBoard;
  onUpdate: (updates: Partial<DailyBoard>) => void;
  compact?: boolean;
}

const THEME = {
  A: {
    gradient: 'from-amber-400 to-orange-500',
    headerBg: 'from-amber-400/25 to-orange-400/15',
    teamText: 'text-amber-600',
    dashedBorder: 'border-amber-300',
    iconText: 'text-amber-400',
    inputFocus: 'focus:ring-amber-300 focus:border-amber-400',
  },
  B: {
    gradient: 'from-indigo-500 to-blue-600',
    headerBg: 'from-indigo-400/25 to-blue-400/15',
    teamText: 'text-indigo-600',
    dashedBorder: 'border-indigo-300',
    iconText: 'text-indigo-400',
    inputFocus: 'focus:ring-indigo-300 focus:border-indigo-400',
  },
};

export function DinnerCard({ board, onUpdate, compact = false }: Props) {
  const team = board.dinner_team;
  const members = team === 'A' ? TEAM_A_MEMBERS : TEAM_B_MEMBERS;
  const theme = THEME[team];

  const [dinnerPlan, setDinnerPlan] = useState(board.dinner_plan ?? '');
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setDinnerPlan(board.dinner_plan ?? ''); }, [board.dinner_plan]);

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  const handleChange = (value: string) => {
    setDinnerPlan(value);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => onUpdate({ dinner_plan: value }), 600);
  };

  const handleBlur = () => {
    if (saveTimer.current) { clearTimeout(saveTimer.current); saveTimer.current = null; }
    onUpdate({ dinner_plan: dinnerPlan });
    setIsEditing(false);
  };

  const showDisplay = dinnerPlan.trim() !== '' && !isEditing;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="glass rounded-3xl shadow-xl overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className={`px-3 pt-3 pb-2 bg-gradient-to-r ${theme.headerBg}`}>
        <div className="flex items-center gap-1.5 mb-1">
          <span className={`flex items-center justify-center w-6 h-6 rounded-lg text-white bg-gradient-to-br ${theme.gradient}`}>
            <ChefHat size={12} />
          </span>
          <span className={`font-black text-base ${theme.teamText}`}>Team {team}</span>
        </div>
        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${theme.gradient}`}>
          🍳 Dinner
        </span>
        {!compact && (
          <div className="flex flex-wrap gap-1 mt-2">
            {members.map((m) => <MemberChip key={m.name} member={m} size="sm" />)}
          </div>
        )}
      </div>

      <div className={`flex flex-col gap-2 ${compact ? 'p-2.5' : 'p-4'}`}>

        {/* Dinner plan — two-state */}
        <AnimatePresence mode="wait" initial={false}>
          {showDisplay ? (
            <motion.button
              key="display"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsEditing(true)}
              className={`
                w-full text-left rounded-2xl bg-gradient-to-br ${theme.gradient}
                shadow-lg active:scale-[0.97] transition-transform duration-100
                ${compact ? 'px-3 py-2.5' : 'px-4 py-3'}
              `}
            >
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">
                🍽️ Tonight
              </p>
              <p className={`text-white font-black leading-tight ${compact ? 'text-base' : 'text-xl'}`}>
                {dinnerPlan}
              </p>
              <div className="flex items-center gap-1 mt-1.5">
                <Pencil size={9} className="text-white/50" />
                <span className="text-white/50 text-[10px]">tap to change</span>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="input"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`rounded-2xl border-2 border-dashed ${theme.dashedBorder} bg-white/40`}
            >
              {!isEditing && !dinnerPlan && (
                <div className={`flex items-center gap-2 ${compact ? 'px-3 pt-2.5' : 'px-4 pt-3'}`}>
                  <ChefHat size={14} className={theme.iconText} />
                  <span className={`text-[11px] font-semibold ${theme.iconText}`}>
                    What's for dinner tonight?
                  </span>
                </div>
              )}
              <input
                ref={inputRef}
                value={dinnerPlan}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={() => setIsEditing(true)}
                onBlur={handleBlur}
                placeholder="Type a meal…"
                className={`
                  w-full bg-transparent text-gray-800 placeholder-gray-400
                  focus:outline-none
                  ${compact ? 'text-xs px-3 py-2' : 'text-sm px-4 py-3'}
                `}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tasks */}
        <div className="flex flex-col gap-1.5">
          <TaskTile
            icon={<ChefHat size={20} />}
            label="Prep"
            sublabel="Chop & prepare"
            done={board.dinner_prep_done}
            doneBy={board.dinner_prep_by || undefined}
            members={members}
            onToggle={() => onUpdate({ dinner_prep_done: false, dinner_prep_by: '' })}
            onPickMember={(abbrev) => onUpdate({ dinner_prep_done: true, dinner_prep_by: abbrev })}
            accentClass={theme.gradient}
            compact={compact}
          />
          <TaskTile
            icon={<Flame size={20} />}
            label="Cook"
            sublabel="Get it cooking"
            done={board.dinner_cook_done}
            doneBy={board.dinner_cook_by || undefined}
            members={members}
            onToggle={() => onUpdate({ dinner_cook_done: false, dinner_cook_by: '' })}
            onPickMember={(abbrev) => onUpdate({ dinner_cook_done: true, dinner_cook_by: abbrev })}
            accentClass={theme.gradient}
            compact={compact}
          />
          <TaskTile
            icon={<Utensils size={20} />}
            label="Serve"
            sublabel="Set the table"
            done={board.dinner_serve_done}
            doneBy={board.dinner_serve_by || undefined}
            members={members}
            onToggle={() => onUpdate({ dinner_serve_done: false, dinner_serve_by: '' })}
            onPickMember={(abbrev) => onUpdate({ dinner_serve_done: true, dinner_serve_by: abbrev })}
            accentClass={theme.gradient}
            compact={compact}
          />
        </div>
      </div>
    </motion.div>
  );
}
