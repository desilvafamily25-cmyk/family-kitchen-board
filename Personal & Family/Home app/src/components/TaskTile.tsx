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
  compact?: boolean;
}

export function TaskTile({
  icon,
  label,
  sublabel,
  done,
  onToggle,
  accentClass = 'from-emerald-400 to-teal-500',
  disabled = false,
  compact = false,
}: Props) {
  return (
    <div className={`
      rounded-xl border-2 transition-colors duration-200
      ${done ? 'bg-emerald-50 border-emerald-200' : 'bg-white/60 border-gray-200'}
    `}>
      <button
        onClick={disabled ? undefined : onToggle}
        className={`flex items-center w-full text-left select-none transition-transform duration-100
          ${compact ? 'gap-2 p-2.5' : 'gap-4 p-4'}
          ${disabled ? 'cursor-default' : 'active:scale-[0.97]'}
        `}
      >
        {/* Icon */}
        <div className={`
          rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300
          ${compact ? 'w-8 h-8' : 'w-12 h-12'}
          ${done ? `bg-gradient-to-br ${accentClass}` : 'bg-gray-100'}
        `}>
          <span className={`transition-colors duration-300 ${done ? 'text-white' : 'text-gray-500'} ${compact ? '[&>svg]:w-3.5 [&>svg]:h-3.5' : ''}`}>
            {icon}
          </span>
        </div>

        {/* Label */}
        <div className="flex-1 min-w-0">
          <p className={`font-semibold leading-tight transition-all duration-300
            ${compact ? 'text-xs' : 'text-base'}
            ${done ? 'text-gray-400 line-through' : 'text-gray-800'}
          `}>
            {label}
          </p>
          {sublabel && !done && !compact && (
            <p className="text-xs text-gray-400 mt-0.5">{sublabel}</p>
          )}
        </div>

        {/* Check circle */}
        <div className={`
          rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300
          ${compact ? 'w-6 h-6' : 'w-8 h-8'}
          ${done ? 'bg-emerald-500 border-emerald-500 shadow-md shadow-emerald-200' : 'border-gray-300'}
        `}>
          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              >
                <Check size={compact ? 12 : 16} className="text-white" strokeWidth={3} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>
    </div>
  );
}
