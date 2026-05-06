import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { DailyBoard } from '../types';
import { TaskTile } from './TaskTile';

interface Props {
  board: DailyBoard;
  onUpdate: (updates: Partial<DailyBoard>) => void;
}

export function SchoolDayCard({ board, onUpdate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      className="glass rounded-3xl shadow-xl mb-4 overflow-hidden"
    >
      <div className="px-5 pt-4 pb-3 bg-gradient-to-r from-pink-400/20 to-rose-400/10">
        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg text-white bg-gradient-to-br from-pink-500 to-rose-500">
            <Heart size={14} />
          </span>
          School Day
        </h2>
      </div>

      <div className="p-5 space-y-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Mum's extra daily contribution
          </p>
          <TaskTile
            icon={<Heart size={20} />}
            label="School lunches"
            sublabel="Mum / Nishadi"
            done={board.mum_school_lunch_done}
            onToggle={() => onUpdate({ mum_school_lunch_done: !board.mum_school_lunch_done })}
            accentClass="from-pink-400 to-rose-500"
          />
        </div>

        {/* Simple lunchbox reminder */}
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
          <p className="text-sm font-bold text-amber-800 mb-1">🎒 Kids — when you get home</p>
          <p className="text-sm text-amber-700">
            Empty your lunchbox and put it in the dishwasher.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
