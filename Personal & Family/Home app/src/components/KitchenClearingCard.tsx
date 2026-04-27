import { motion } from 'framer-motion';
import { Sparkles, Wind, Home } from 'lucide-react';
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
  },
  B: {
    gradient: 'from-indigo-500 to-blue-600',
    headerBg: 'from-indigo-400/25 to-blue-400/15',
    teamText: 'text-indigo-600',
  },
};

export function KitchenClearingCard({ board, onUpdate, compact = false }: Props) {
  const team = board.clearing_team;
  const members = team === 'A' ? TEAM_A_MEMBERS : TEAM_B_MEMBERS;
  const theme = THEME[team];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="glass rounded-3xl shadow-xl overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className={`px-3 pt-3 pb-2 bg-gradient-to-r ${theme.headerBg}`}>
        <div className="flex items-center gap-1.5 mb-1">
          <span className={`flex items-center justify-center w-6 h-6 rounded-lg text-white bg-gradient-to-br ${theme.gradient}`}>
            <Sparkles size={12} />
          </span>
          <span className={`font-black text-base ${theme.teamText}`}>Team {team}</span>
        </div>
        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${theme.gradient}`}>
          ✨ Clearing
        </span>
        {!compact && (
          <div className="flex flex-wrap gap-1 mt-2">
            {members.map((m) => <MemberChip key={m.name} member={m} size="sm" />)}
          </div>
        )}
      </div>

      <div className={`flex flex-col gap-1.5 ${compact ? 'p-2.5' : 'p-4'}`}>
        <TaskTile
          icon={<Wind size={20} />}
          label="Empty dishwasher"
          sublabel="Morning"
          done={board.dishwasher_emptied_done}
          onToggle={() => onUpdate({ dishwasher_emptied_done: !board.dishwasher_emptied_done, ...(!board.dishwasher_emptied_done ? {} : { dishwasher_emptied_by: '' }) })}
          completedBy={board.dishwasher_emptied_by}
          onSelectBy={(name) => onUpdate({ dishwasher_emptied_by: name })}
          teamMembers={members}
          accentClass={theme.gradient}
          compact={compact}
        />
        <TaskTile
          icon={<Sparkles size={20} />}
          label="Load dishwasher"
          sublabel="After dinner"
          done={board.dishwasher_loaded_done}
          onToggle={() => onUpdate({ dishwasher_loaded_done: !board.dishwasher_loaded_done, ...(!board.dishwasher_loaded_done ? {} : { dishwasher_loaded_by: '' }) })}
          completedBy={board.dishwasher_loaded_by}
          onSelectBy={(name) => onUpdate({ dishwasher_loaded_by: name })}
          teamMembers={members}
          accentClass={theme.gradient}
          compact={compact}
        />
        <TaskTile
          icon={<Home size={20} />}
          label="Reset kitchen"
          sublabel="Wipe benches"
          done={board.kitchen_reset_done}
          onToggle={() => onUpdate({ kitchen_reset_done: !board.kitchen_reset_done, ...(!board.kitchen_reset_done ? {} : { kitchen_reset_by: '' }) })}
          completedBy={board.kitchen_reset_by}
          onSelectBy={(name) => onUpdate({ kitchen_reset_by: name })}
          teamMembers={members}
          accentClass={theme.gradient}
          compact={compact}
        />
      </div>
    </motion.div>
  );
}
