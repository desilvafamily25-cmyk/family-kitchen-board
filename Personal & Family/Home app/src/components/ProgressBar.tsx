import { motion } from 'framer-motion';

interface Props {
  completed: number;
  total: number;
}

export function ProgressBar({ completed, total }: Props) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const allDone = completed === total && total > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="flex items-center gap-3 glass rounded-2xl px-4 py-2.5 mb-3 shadow-sm"
    >
      <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
        {allDone ? '🎉 All done!' : `${completed} / ${total} done`}
      </span>

      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            allDone
              ? 'bg-gradient-to-r from-emerald-400 to-teal-500'
              : 'bg-gradient-to-r from-amber-400 to-indigo-500'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      <span className={`text-xs font-bold whitespace-nowrap ${allDone ? 'text-emerald-600' : 'text-gray-500'}`}>
        {pct}%
      </span>
    </motion.div>
  );
}
