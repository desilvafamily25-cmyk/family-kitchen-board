import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDisplayDate } from '../lib/dateUtils';

interface Props {
  onSettingsClick: () => void;
}

export function Header({ onSettingsClick }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-start justify-between pt-6 pb-2"
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🍳</span>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Family Kitchen Board
          </h1>
        </div>
        <p className="text-sm text-gray-500 font-medium">{formatDisplayDate()}</p>
        <p className="text-xs text-gray-400 mt-0.5">
          One clear plan. Less arguing. Everyone helps.
        </p>
      </div>

      <button
        onClick={onSettingsClick}
        className="
          mt-1 flex items-center justify-center w-10 h-10 rounded-2xl
          bg-white/70 border border-white/60 shadow-sm
          hover:bg-white/90 active:scale-95
          transition-all duration-150
        "
        aria-label="Open settings"
      >
        <Settings size={20} className="text-gray-600" />
      </button>
    </motion.header>
  );
}
