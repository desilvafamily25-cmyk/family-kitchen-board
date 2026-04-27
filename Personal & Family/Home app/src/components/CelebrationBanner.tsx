import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import confetti from 'canvas-confetti';

export function CelebrationBanner() {
  useEffect(() => {
    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        origin: { y: 0.6 },
        ...opts,
        particleCount: Math.floor(200 * particleRatio),
        colors: ['#f59e0b', '#8b5cf6', '#3b82f6', '#10b981', '#f43f5e'],
      });
    };

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="
        rounded-3xl p-5 mb-4 text-center overflow-hidden relative
        bg-gradient-to-br from-emerald-400 to-teal-500
        shadow-xl shadow-emerald-200
      "
    >
      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
        style={{ skewX: '-15deg' }}
      />

      <div className="relative z-10">
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl mb-2"
        >
          🎉
        </motion.div>

        <h3 className="text-lg font-bold text-white mb-1">
          Kitchen closed.
        </h3>
        <p className="text-sm font-semibold text-emerald-50">
          Family reset complete.
        </p>

        <div className="flex items-center justify-center gap-1 mt-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -4, 0] }}
              transition={{ delay: i * 0.15, duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
            >
              <Star size={14} className="text-yellow-300 fill-yellow-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
