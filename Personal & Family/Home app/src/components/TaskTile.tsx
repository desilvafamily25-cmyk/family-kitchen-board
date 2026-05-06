import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';
import type { TeamMember } from '../types';

interface Props {
  icon: ReactNode;
  label: string;
  sublabel?: string;
  done: boolean;
  doneBy?: string;
  onToggle: () => void;
  onPickMember?: (abbrev: string) => void;
  members?: TeamMember[];
  accentClass?: string;
  disabled?: boolean;
  compact?: boolean;
}

export function TaskTile({
  icon,
  label,
  sublabel,
  done,
  doneBy,
  onToggle,
  onPickMember,
  members,
  accentClass = 'from-emerald-400 to-teal-500',
  disabled = false,
  compact = false,
}: Props) {
  const [flipped, setFlipped] = useState(false);

  const handleFrontClick = () => {
    if (disabled) return;
    if (done) {
      onToggle();
    } else if (members?.length && onPickMember) {
      setFlipped(true);
    } else {
      onToggle();
    }
  };

  const handlePickMember = (abbrev: string) => {
    onPickMember?.(abbrev);
    setFlipped(false);
  };

  return (
    <div style={{ perspective: '800px' }}>
      <motion.div
        className="relative"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ── Front face ── */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            pointerEvents: flipped ? 'none' : 'auto',
          }}
          className={`
            rounded-xl border-2 transition-colors duration-200
            ${done ? 'bg-emerald-50 border-emerald-200' : 'bg-white/60 border-gray-200'}
          `}
        >
          <button
            onClick={handleFrontClick}
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
              {done && doneBy && (
                <p className={`font-semibold text-gray-500 leading-tight ${compact ? 'text-[10px]' : 'text-xs mt-0.5'}`}>
                  {doneBy}
                </p>
              )}
            </div>

            {/* Check circle */}
            <div className={`
              rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300
              ${compact ? 'w-6 h-6' : 'w-8 h-8'}
              ${done ? 'bg-emerald-500 border-emerald-500 shadow-md shadow-emerald-200' : 'border-gray-300'}
            `}>
              <motion.div
                animate={{ scale: done ? 1 : 0, opacity: done ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              >
                <Check size={compact ? 12 : 16} className="text-white" strokeWidth={3} />
              </motion.div>
            </div>
          </button>
        </div>

        {/* ── Back face (name picker) ── */}
        {members && members.length > 0 && (
          <div
            onClick={() => setFlipped(false)}
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: flipped ? 'auto' : 'none',
            }}
            className="rounded-xl border-2 border-gray-200 bg-white/95 flex flex-col items-center justify-center cursor-pointer"
          >
            {!compact && (
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Who did it?
              </p>
            )}
            <div className={`flex items-center gap-2 w-full ${compact ? 'px-2.5' : 'px-4'}`}>
              {members.map((m) => (
                <button
                  key={m.abbrev}
                  onClick={(e) => { e.stopPropagation(); handlePickMember(m.abbrev); }}
                  className={`
                    flex-1 rounded-full font-black text-white transition-transform active:scale-90
                    ${compact ? 'py-1.5 text-xs' : 'py-2.5 text-sm'}
                  `}
                  style={{ backgroundColor: m.color }}
                >
                  {m.abbrev}
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
