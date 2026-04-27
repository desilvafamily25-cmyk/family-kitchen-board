import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import type { TeamMember } from '../types';

interface Props {
  icon: ReactNode;
  label: string;
  sublabel?: string;
  done: boolean;
  onToggle: () => void;
  completedBy?: string;
  onSelectBy?: (name: string) => void;
  teamMembers?: TeamMember[];
  accentClass?: string;
  disabled?: boolean;
}

export function TaskTile({
  icon,
  label,
  sublabel,
  done,
  onToggle,
  completedBy = '',
  onSelectBy,
  teamMembers,
  accentClass = 'from-emerald-400 to-teal-500',
  disabled = false,
}: Props) {
  return (
    <div
      className={`
        rounded-2xl border-2 transition-all duration-200
        ${done ? 'bg-emerald-50 border-emerald-200' : 'bg-white/60 border-gray-200'}
      `}
    >
      {/* Main row */}
      <motion.button
        layout
        onClick={disabled ? undefined : onToggle}
        whileTap={disabled ? {} : { scale: 0.97 }}
        className="flex items-center gap-4 w-full p-4 text-left select-none cursor-pointer"
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
          <p className={`text-base font-semibold leading-tight transition-all duration-300 ${
            done ? 'text-gray-400 line-through' : 'text-gray-800'
          }`}>
            {label}
          </p>
          {sublabel && !done && (
            <p className="text-xs text-gray-400 mt-0.5">{sublabel}</p>
          )}
          {done && completedBy && (
            <p className="text-xs font-semibold text-emerald-600 mt-0.5">
              ✓ Done by {completedBy}
            </p>
          )}
        </div>

        {/* Check circle */}
        <div className={`
          w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0
          transition-all duration-300
          ${done ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-200' : 'border-gray-300'}
        `}>
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

      {/* Who did it — appears below when ticked */}
      <AnimatePresence>
        {done && teamMembers && onSelectBy && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 pt-0 border-t border-emerald-100">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-2">
                Who did this?
              </p>
              <div className="flex flex-wrap gap-1.5">
                {teamMembers.map((m) => {
                  const selected = completedBy === m.name;
                  return (
                    <button
                      key={m.name}
                      onClick={() => onSelectBy(selected ? '' : m.name)}
                      className={`
                        px-3 py-1 rounded-full text-xs font-semibold border-2 transition-all duration-150
                        ${selected
                          ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm'
                          : `${m.bgClass} ${m.textClass} border-transparent hover:border-current`
                        }
                      `}
                    >
                      {m.nickname}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
