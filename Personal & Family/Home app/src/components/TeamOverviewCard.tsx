import { motion } from 'framer-motion';
import { ChefHat, Sparkles } from 'lucide-react';
import type { DailyBoard } from '../types';
import { TEAM_A_MEMBERS, TEAM_B_MEMBERS } from '../types';
import { MemberChip } from './MemberChip';

interface Props {
  board: DailyBoard;
}

export function TeamOverviewCard({ board }: Props) {
  const dinnerIsA = board.dinner_team === 'A';
  const dinnerMembers = dinnerIsA ? TEAM_A_MEMBERS : TEAM_B_MEMBERS;
  const clearingMembers = dinnerIsA ? TEAM_B_MEMBERS : TEAM_A_MEMBERS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="glass rounded-3xl shadow-xl mb-4 overflow-hidden"
    >
      <div className="px-5 pt-4 pb-2">
        <h2 className="text-base font-bold text-gray-800 flex items-center gap-2 mb-3">
          <span>👥</span> Today's Teams
        </h2>
      </div>

      <div className="px-4 pb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

        {/* Dinner team card */}
        <div className={`rounded-2xl p-4 ${
          dinnerIsA
            ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200'
            : 'bg-gradient-to-br from-violet-50 to-blue-50 border-2 border-violet-200'
        }`}>
          {/* Big team name */}
          <p className={`text-3xl font-black tracking-tight mb-1 ${
            dinnerIsA ? 'text-amber-600' : 'text-violet-600'
          }`}>
            Team {board.dinner_team}
          </p>

          {/* Role badge */}
          <div className="flex items-center gap-1.5 mb-3">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
              dinnerIsA
                ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                : 'bg-gradient-to-r from-violet-500 to-blue-600'
            }`}>
              <ChefHat size={11} />
              Dinner Team
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {dinnerMembers.map((m) => (
              <MemberChip key={m.name} member={m} size="sm" />
            ))}
          </div>
        </div>

        {/* Clearing team card */}
        <div className={`rounded-2xl p-4 ${
          !dinnerIsA
            ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200'
            : 'bg-gradient-to-br from-violet-50 to-blue-50 border-2 border-violet-200'
        }`}>
          {/* Big team name */}
          <p className={`text-3xl font-black tracking-tight mb-1 ${
            !dinnerIsA ? 'text-amber-600' : 'text-violet-600'
          }`}>
            Team {board.clearing_team}
          </p>

          {/* Role badge */}
          <div className="flex items-center gap-1.5 mb-3">
            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
              !dinnerIsA
                ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                : 'bg-gradient-to-r from-violet-500 to-blue-600'
            }`}>
              <Sparkles size={11} />
              Clearing Team
            </span>
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
