import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import type { DailyBoard } from '../types';
import { TaskTile } from './TaskTile';

interface Props {
  board: DailyBoard;
  onUpdate: (updates: Partial<DailyBoard>) => void;
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function SchoolDayCard({ board, onUpdate }: Props) {
  return (
    <motion.div
      variants={CARD_VARIANTS}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.45 }}
      className="glass rounded-3xl shadow-xl mb-4 overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 pt-4 pb-3 bg-gradient-to-r from-pink-400/20 to-rose-400/10">
        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg text-white bg-gradient-to-br from-pink-500 to-rose-500">
            <Heart size={14} />
          </span>
          School Day
        </h2>
      </div>

      <div className="p-5 space-y-4">
        {/* Mum's contribution */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Mum's extra daily contribution
          </p>
          <TaskTile
            icon={<Heart size={20} />}
            label="School lunches"
            sublabel="Mum / Nishadi — making lunch for the kids"
            done={board.mum_school_lunch_done}
            onToggle={() =>
              onUpdate({ mum_school_lunch_done: !board.mum_school_lunch_done })
            }
            accentClass="from-pink-400 to-rose-500"
          />
        </div>

        {/* Lunchbox reminder — no tick box, info only */}
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
          <p className="text-sm font-bold text-amber-800 mb-1">
            🎒 School-day reminder
          </p>
          <p className="text-sm text-amber-700 leading-relaxed">
            When you come home, please empty your lunchbox and put it straight
            into the dishwasher.
          </p>
          <p className="text-xs font-semibold text-amber-600 mt-2">
            This is your own job — not a team job.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
