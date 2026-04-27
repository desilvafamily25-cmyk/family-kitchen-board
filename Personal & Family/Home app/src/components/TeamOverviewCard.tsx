import { motion } from 'framer-motion';
import { ChefHat, Sparkles } from 'lucide-react';
import type { DailyBoard, TeamMember } from '../types';
import { TEAM_A_MEMBERS, TEAM_B_MEMBERS } from '../types';
import { MemberChip } from './MemberChip';

const TEAM_THEME = {
  A: {
    gradient: 'from-amber-400 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
    border: 'border-amber-300',
    text: 'text-amber-600',
    glow: 'shadow-amber-300/60',
  },
  B: {
    gradient: 'from-indigo-500 to-blue-600',
    bg: 'from-indigo-50 to-blue-50',
    border: 'border-indigo-300',
    text: 'text-indigo-600',
    glow: 'shadow-indigo-300/60',
  },
};

function TeamCard({
  team,
  role,
  leader,
  members,
}: {
  team: 'A' | 'B';
  role: 'dinner' | 'clearing';
  leader: TeamMember;
  members: TeamMember[];
}) {
  const t = TEAM_THEME[team];

  return (
    <div className={`rounded-2xl p-3 bg-gradient-to-br ${t.bg} border-2 ${t.border}`}>

      {/* Line 1: Team A / Team B — always fits, never wraps */}
      <p className={`text-2xl font-black tracking-tight leading-none mb-1.5 ${t.text}`}>
        Team {team}
      </p>

      {/* Line 2: Leader — highlighted with pulse animation */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className={`
          inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl mb-2
          bg-gradient-to-r ${t.gradient} shadow-md ${t.glow}
        `}
      >
        <span
          className="w-5 h-5 rounded-full text-[10px] font-black text-white flex items-center justify-center bg-white/30"
        >
          {leader.name[0]}
        </span>
        <span className="text-white text-xs font-bold">{leader.nickname}</span>
        <span className="text-white/80 text-[10px]">★</span>
      </motion.div>

      {/* Role badge */}
      <div className="mb-2">
        <span className={`
          inline-flex items-center gap-1 px-2 py-0.5 rounded-full
          text-[10px] font-bold uppercase tracking-wider
          bg-white/60 border ${t.border} ${t.text}
        `}>
          {role === 'dinner' ? <ChefHat size={10} /> : <Sparkles size={10} />}
          {role === 'dinner' ? 'Dinner' : 'Clearing'}
        </span>
      </div>

      {/* Other members */}
      <div className="flex flex-wrap gap-1">
        {members.filter((m) => m.name !== leader.name).map((m) => (
          <MemberChip key={m.name} member={m} size="sm" />
        ))}
      </div>
    </div>
  );
}

interface Props { board: DailyBoard }

export function TeamOverviewCard({ board }: Props) {
  const dinnerIsA = board.dinner_team === 'A';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="glass rounded-3xl shadow-xl mb-3 overflow-hidden"
    >
      <div className="px-4 pt-3 pb-1">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5 mb-2">
          <span>👥</span> Today's Teams
        </h2>
      </div>

      <div className="px-3 pb-4 grid grid-cols-2 gap-2">
        <TeamCard
          team={board.dinner_team}
          role="dinner"
          leader={dinnerIsA ? TEAM_A_MEMBERS[0] : TEAM_B_MEMBERS[0]}
          members={dinnerIsA ? TEAM_A_MEMBERS : TEAM_B_MEMBERS}
        />
        <TeamCard
          team={board.clearing_team}
          role="clearing"
          leader={dinnerIsA ? TEAM_B_MEMBERS[0] : TEAM_A_MEMBERS[0]}
          members={dinnerIsA ? TEAM_B_MEMBERS : TEAM_A_MEMBERS}
        />
      </div>
    </motion.div>
  );
}
