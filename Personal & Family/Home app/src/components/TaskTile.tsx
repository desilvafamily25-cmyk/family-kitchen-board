import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  label: string;
  sublabel?: string;
  done: boolean;
  onToggle: () => void;
  accentClass?: string;
  disabled?: boolean;
}

export function TaskTile({
  icon,
  label,
  sublabel,
  done,
  onToggle,
  accentClass = 'from-emerald-400 to-teal-500',
  disabled = false,
}: Props) {
  return (
    <motion.button
      layout
      onClick={disabled ? undefined : onToggle}
      whileTap={disabled ? {} : { scale: 0.97 }}
      className={`
        flex items-center gap-4 w-full p-4 rounded-2xl border-2 text-left
        transition-all duration-200 select-none
        ${disabled ? 'cursor-default opacity-70' : 'cursor-pointer active:scale-[0.97]'}
        ${done
          ? 'bg-emerald-50 border-emerald-200'
          : 'bg-white/60 border-gray-200 hover:border-gray-300 hover:bg-white/80'
        }
      `}
    >
      {/* Icon box */}
      <motion.div
        animate={done ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`
          w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
          transition-all duration-300
          ${done ? `bg-gradient-to-br ${accentClass}` : 'bg-gray-100'}
        `}
      >
        <span className={`transition-colors duration-300 ${done ? 'text-white' : 'text-gray-500'}`}>
          {icon}
        </span>
      </motion.div>

      {/* Labels */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-base font-semibold leading-tight transition-all duration-300 ${
            done ? 'text-gray-400 line-through' : 'text-gray-800'
          }`}
        >
          {label}
        </p>
        {sublabel && (
          <p className="text-xs text-gray-400 mt-0.5">{sublabel}</p>
        )}
      </div>

      {/* Check circle */}
      <div
        className={`
          w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0
          transition-all duration-300
          ${done ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-200' : 'border-gray-300'}
        `}
      >
        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <Check size={16} className="text-white" strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
