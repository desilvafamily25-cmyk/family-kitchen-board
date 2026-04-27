import { motion } from 'framer-motion';
import { Sparkles, Wind, Home } from 'lucide-react';
import type { DailyBoard } from '../types';
import { TEAM_A_MEMBERS, TEAM_B_MEMBERS } from '../types';
import { MemberChip } from './MemberChip';
import { TaskTile } from './TaskTile';

interface Props {
  board: DailyBoard;
  onUpdate: (updates: Partial<DailyBoard>) => void;
}

export function KitchenClearingCard({ board, onUpdate }: Props) {
  const isTeamA = board.clearing_team === 'A';
  const members = isTeamA ? TEAM_A_MEMBERS : TEAM_B_MEMBERS;

  const gradientClass = isTeamA ? 'from-amber-400 to-orange-500' : 'from-violet-500 to-blue-600';
  const headerBgClass = isTeamA
    ? 'bg-gradient-to-r from-amber-400/20 to-orange-400/10'
    : 'bg-gradient-to-r from-violet-400/20 to-blue-400/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="glass rounded-3xl shadow-xl mb-4 overflow-hidden"
    >
      <div className={`px-5 pt-4 pb-3 ${headerBgClass}`}>
        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
          <span className={`flex items-center justify-center w-7 h-7 rounded-lg text-white bg-gradient-to-br ${gradientClass}`}>
            <Sparkles size={14} />
          </span>
          Clearing Team — Team {board.clearing_team}
        </h2>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {members.map((m) => <MemberChip key={m.name} member={m} size="sm" />)}
        </div>
      </div>

      <div className="p-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Tasks</p>

        <TaskTile
          icon={<Wind size={20} />}
          label="Empty dishwasher"
          sublabel="Morning — before school / work"
          done={board.dishwasher_emptied_done}
          onToggle={() => onUpdate({ dishwasher_emptied_done: !board.dishwasher_emptied_done, ...(!board.dishwasher_emptied_done ? {} : { dishwasher_emptied_by: '' }) })}
          completedBy={board.dishwasher_emptied_by}
          onSelectBy={(name) => onUpdate({ dishwasher_emptied_by: name })}
          teamMembers={members}
          accentClass={gradientClass}
        />
        <TaskTile
          icon={<Sparkles size={20} />}
          label="Load dishwasher"
          sublabel="After dinner — dishes, pots, cups"
          done={board.dishwasher_loaded_done}
          onToggle={() => onUpdate({ dishwasher_loaded_done: !board.dishwasher_loaded_done, ...(!board.dishwasher_loaded_done ? {} : { dishwasher_loaded_by: '' }) })}
          completedBy={board.dishwasher_loaded_by}
          onSelectBy={(name) => onUpdate({ dishwasher_loaded_by: name })}
          teamMembers={members}
          accentClass={gradientClass}
        />
        <TaskTile
          icon={<Home size={20} />}
          label="Wipe benches & reset kitchen"
          sublabel="Benches clean, everything put away"
          done={board.kitchen_reset_done}
          onToggle={() => onUpdate({ kitchen_reset_done: !board.kitchen_reset_done, ...(!board.kitchen_reset_done ? {} : { kitchen_reset_by: '' }) })}
          completedBy={board.kitchen_reset_by}
          onSelectBy={(name) => onUpdate({ kitchen_reset_by: name })}
          teamMembers={members}
          accentClass={gradientClass}
        />
      </div>
    </motion.div>
  );
}
