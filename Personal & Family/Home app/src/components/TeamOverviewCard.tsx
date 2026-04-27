import { motion } from 'framer-motion';
import { ChefHat, Sparkles } from 'lucide-react';
import type { DailyBoard } from '../types';
import { TEAM_A_MEMBERS, TEAM_B_MEMBERS } from '../types';
import { MemberChip } from './MemberChip';

interface Props {
  board: DailyBoard;
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function TeamOverviewCard({ board }: Props) {
  const dinnerMembers = board.dinner_team === 'A' ? TEAM_A_MEMBERS : TEAM_B_MEMBERS;
  const clearingMembers = board.clearing_team === 'A' ? TEAM_A_MEMBERS : TEAM_B_MEMBERS;
  const dinnerIsA = board.dinner_team === 'A';

  return (
    <motion.div
      variants={CARD_VARIANTS}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.15 }}
      className="glass rounded-3xl shadow-xl mb-4 overflow-hidden"
    >
      {/* Header stripe */}
      <div
        className={`px-5 pt-4 pb-3 ${
          dinnerIsA
            ? 'bg-gradient-to-r from-amber-400/20 to-orange-400/10'
            : 'bg-gradient-to-r from-violet-400/20 to-blue-400/10'
        }`}
      >
        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2">
          <span>👥</span> Today's Teams
        </h2>
      </div>

      <div className="p-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Dinner team */}
        <div
          className={`rounded-2xl p-4 ${
            dinnerIsA
              ? 'bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200'
              : 'bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-xl text-white ${
                dinnerIsA
                  ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                  : 'bg-gradient-to-br from-violet-500 to-blue-600'
              }`}
            >
              <ChefHat size={16} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Dinner Team
              </p>
              <p className={`text-sm font-bold ${dinnerIsA ? 'text-amber-700' : 'text-violet-700'}`}>
                Team {board.dinner_team}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {dinnerMembers.map((m) => (
              <MemberChip key={m.name} member={m} size="sm" />
            ))}
          </div>
        </div>

        {/* Clearing team */}
        <div
          className={`rounded-2xl p-4 ${
            !dinnerIsA
              ? 'bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200'
              : 'bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-200'
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-xl text-white ${
                !dinnerIsA
                  ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                  : 'bg-gradient-to-br from-violet-500 to-blue-600'
              }`}
            >
              <Sparkles size={16} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Clearing Team
              </p>
              <p
                className={`text-sm font-bold ${
                  !dinnerIsA ? 'text-amber-700' : 'text-violet-700'
                }`}
              >
                Team {board.clearing_team}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {clearingMembers.map((m) => (
              <MemberChip key={m.name} member={m} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
