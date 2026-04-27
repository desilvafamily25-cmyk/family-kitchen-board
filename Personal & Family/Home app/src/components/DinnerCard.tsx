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
}

export function DinnerCard({ board, onUpdate }: Props) {
  const isTeamA = board.dinner_team === 'A';
  const members = isTeamA ? TEAM_A_MEMBERS : TEAM_B_MEMBERS;
  const [dinnerPlan, setDinnerPlan] = useState(board.dinner_plan ?? '');
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setDinnerPlan(board.dinner_plan ?? '');
  }, [board.dinner_plan]);

  const handleDinnerPlanChange = (value: string) => {
    setDinnerPlan(value);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      onUpdate({ dinner_plan: value });
    }, 800);
  };

  const gradientClass = isTeamA ? 'from-amber-400 to-orange-500' : 'from-violet-500 to-blue-600';
  const headerBgClass = isTeamA
    ? 'bg-gradient-to-r from-amber-400/20 to-orange-400/10'
    : 'bg-gradient-to-r from-violet-400/20 to-blue-400/10';
  const inputFocusClass = isTeamA
    ? 'focus:ring-amber-300 focus:border-amber-400'
    : 'focus:ring-violet-300 focus:border-violet-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="glass rounded-3xl shadow-xl mb-4 overflow-hidden"
    >
      <div className={`px-5 pt-4 pb-3 ${headerBgClass}`}>
        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
          <span className={`flex items-center justify-center w-7 h-7 rounded-lg text-white bg-gradient-to-br ${gradientClass}`}>
            <ChefHat size={14} />
          </span>
          Dinner Team — Team {board.dinner_team}
        </h2>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {members.map((m) => <MemberChip key={m.name} member={m} size="sm" />)}
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1.5">
            🍽️ What are we making tonight?
          </label>
          <textarea
            value={dinnerPlan}
            onChange={(e) => handleDinnerPlanChange(e.target.value)}
            placeholder="e.g. Spaghetti bolognese, salad, garlic bread…"
            rows={2}
            className={`
              w-full rounded-xl border-2 border-gray-200 bg-white/70 px-4 py-3
              text-sm text-gray-800 placeholder-gray-400 resize-none
              focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200
              ${inputFocusClass}
            `}
          />
          <p className="text-[10px] text-gray-400 mt-1">Saves automatically as you type</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Tasks</p>

          <TaskTile
            icon={<ChefHat size={20} />}
            label="Prep dinner"
            sublabel="Chop, measure, prepare ingredients"
            done={board.dinner_prep_done}
            onToggle={() => onUpdate({ dinner_prep_done: !board.dinner_prep_done, ...(!board.dinner_prep_done ? {} : { dinner_prep_by: '' }) })}
            completedBy={board.dinner_prep_by}
            onSelectBy={(name) => onUpdate({ dinner_prep_by: name })}
            teamMembers={members}
            accentClass={gradientClass}
          />
          <TaskTile
            icon={<Flame size={20} />}
            label="Cook / organise dinner"
            sublabel="Get it on the table"
            done={board.dinner_cook_done}
            onToggle={() => onUpdate({ dinner_cook_done: !board.dinner_cook_done, ...(!board.dinner_cook_done ? {} : { dinner_cook_by: '' }) })}
            completedBy={board.dinner_cook_by}
            onSelectBy={(name) => onUpdate({ dinner_cook_by: name })}
            teamMembers={members}
            accentClass={gradientClass}
          />
          <TaskTile
            icon={<Utensils size={20} />}
            label="Serve / set the table"
            sublabel="Plates, cutlery, drinks"
            done={board.dinner_serve_done}
            onToggle={() => onUpdate({ dinner_serve_done: !board.dinner_serve_done, ...(!board.dinner_serve_done ? {} : { dinner_serve_by: '' }) })}
            completedBy={board.dinner_serve_by}
            onSelectBy={(name) => onUpdate({ dinner_serve_by: name })}
            teamMembers={members}
            accentClass={gradientClass}
          />
        </div>
      </div>
    </motion.div>
  );
}
