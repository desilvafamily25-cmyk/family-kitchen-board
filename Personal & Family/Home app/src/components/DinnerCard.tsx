import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Flame, Utensils } from 'lucide-react';
import type { DailyBoard } from '../types';
import { TEAM_A_MEMBERS, TEAM_B_MEMBERS } from '../types';
import { MemberChip } from './MemberChip';
import { TaskTile } from './TaskTile';

interface Props {
  board: DailyBoard;
  onUpdate: (updates: Partial<DailyBoard>) => void;
  compact?: boolean;
}

// Team A = amber/orange   Team B = indigo/blue
const THEME = {
  A: {
    gradient: 'from-amber-400 to-orange-500',
    headerBg: 'from-amber-400/25 to-orange-400/15',
    teamText: 'text-amber-600',
    border: 'border-amber-200',
    inputFocus: 'focus:ring-amber-300 focus:border-amber-400',
  },
  B: {
    gradient: 'from-indigo-500 to-blue-600',
    headerBg: 'from-indigo-400/25 to-blue-400/15',
    teamText: 'text-indigo-600',
    border: 'border-indigo-200',
    inputFocus: 'focus:ring-indigo-300 focus:border-indigo-400',
  },
};

export function DinnerCard({ board, onUpdate, compact = false }: Props) {
  const team = board.dinner_team;
  const members = team === 'A' ? TEAM_A_MEMBERS : TEAM_B_MEMBERS;
  const theme = THEME[team];

  const [dinnerPlan, setDinnerPlan] = useState(board.dinner_plan ?? '');
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setDinnerPlan(board.dinner_plan ?? ''); }, [board.dinner_plan]);

  const handleDinnerPlanChange = (value: string) => {
    setDinnerPlan(value);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => onUpdate({ dinner_plan: value }), 800);
  };

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
        {/* Dinner plan */}
        <input
          value={dinnerPlan}
          onChange={(e) => handleDinnerPlanChange(e.target.value)}
          placeholder="Tonight's dinner…"
          className={`
            w-full rounded-xl border-2 border-gray-200 bg-white/70
            text-gray-800 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200
            ${compact ? 'text-xs px-2.5 py-1.5' : 'text-sm px-4 py-3'}
            ${theme.inputFocus}
          `}
        />

        {/* Tasks */}
        <div className="flex flex-col gap-1.5">
          <TaskTile
            icon={<ChefHat size={20} />}
            label="Prep"
            sublabel="Chop & prepare"
            done={board.dinner_prep_done}
            onToggle={() => onUpdate({ dinner_prep_done: !board.dinner_prep_done })}
            accentClass={theme.gradient}
            compact={compact}
          />
          <TaskTile
            icon={<Flame size={20} />}
            label="Cook"
            sublabel="Get it cooking"
            done={board.dinner_cook_done}
            onToggle={() => onUpdate({ dinner_cook_done: !board.dinner_cook_done })}
            accentClass={theme.gradient}
            compact={compact}
          />
          <TaskTile
            icon={<Utensils size={20} />}
            label="Serve"
            sublabel="Set the table"
            done={board.dinner_serve_done}
            onToggle={() => onUpdate({ dinner_serve_done: !board.dinner_serve_done })}
            accentClass={theme.gradient}
            compact={compact}
          />
        </div>
      </div>
    </motion.div>
  );
}
