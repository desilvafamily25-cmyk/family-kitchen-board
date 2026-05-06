import { Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDisplayDate } from '../lib/dateUtils';

interface Props {
  onSettingsClick: () => void;
}

export function Header({ onSettingsClick }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        flex items-center justify-between
        px-4 py-3
        bg-gradient-to-r from-amber-500 via-orange-400 to-indigo-500
        rounded-2xl shadow-lg shadow-amber-200/40
        mb-3
      "
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">🍳</span>
        <div>
          <h1 className="text-sm font-black text-white tracking-tight leading-tight">
            Family Kitchen Board
          </h1>
          <p className="text-[11px] text-white/80 font-medium leading-tight">
            {formatDisplayDate()}
          </p>
        </div>
      </div>

      <button
        onClick={onSettingsClick}
        className="
          flex items-center justify-center w-8 h-8 rounded-xl
          bg-white/20 border border-white/30
          hover:bg-white/30 active:scale-95
          transition-all duration-150
        "
        aria-label="Open settings"
      >
        <Settings size={16} className="text-white" />
      </button>
    </motion.header>
  );
}
