import { motion } from 'framer-motion';
import { ChefHat, Sparkles } from 'lucide-react';
import type { DailyBoard, TeamMember } from '../types';
import { TEAM_A_MEMBERS, TEAM_B_MEMBERS } from '../types';
import { MemberChip } from './MemberChip';

interface Props {
  board: DailyBoard;
}

function TeamCard({
  team,
  role,
  leader,
  members,
  isTeamA,
  isDinner,
}: {
  team: 'A' | 'B';
  role: 'dinner' | 'clearing';
  leader: TeamMember;
  members: TeamMember[];
  isTeamA: boolean;
  isDinner: boolean;
}) {
  const amberTheme = (isTeamA && isDinner) || (!isTeamA && !isDinner);

  return (
    <div className={`rounded-2xl p-4 ${
      amberTheme
        ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200'
        : 'bg-gradient-to-br from-violet-50 to-blue-50 border-2 border-violet-200'
    }`}>

      {/* Team name + leader chip side by side */}
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-3xl font-black tracking-tight ${
          amberTheme ? 'text-amber-600' : 'text-violet-600'
        }`}>
          Team {team}
        </span>
        {/* Leader chip — slightly bigger, with a subtle star */}
        <div className={`
          flex items-center gap-1 px-2.5 py-1 rounded-full font-bold text-sm ring-2
          ${leader.bgClass} ${leader.textClass} ${leader.ringClass}
        `}>
          <span
            className="w-5 h-5 rounded-full text-[10px] font-black text-white flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: leader.color }}
          >
            {leader.name[0]}
          </span>
          <span>{leader.nickname}</span>
          <span className="text-[10px]">★</span>
        </div>
      </div>

      {/* Role badge */}
      <div className="mb-3">
        <span className={`
          inline-flex items-center gap-1 px-2.5 py-1 rounded-full
          text-xs font-bold uppercase tracking-wider text-white
          ${amberTheme
            ? 'bg-gradient-to-r from-amber-400 to-orange-500'
            : 'bg-gradient-to-r from-violet-500 to-blue-600'
          }
        `}>
          {role === 'dinner' ? <ChefHat size={11} /> : <Sparkles size={11} />}
          {role === 'dinner' ? 'Dinner Team' : 'Clearing Team'}
        </span>
      </div>

      {/* Other members (excluding leader) */}
      <div className="flex flex-wrap gap-1.5">
        {members.filter((m) => m.name !== leader.name).map((m) => (
          <MemberChip key={m.name} member={m} size="sm" />
        ))}
      </div>
    </div>
  );
}

export function TeamOverviewCard({ board }: Props) {
  const dinnerIsA = board.dinner_team === 'A';

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
        {/* Dinner team */}
        <TeamCard
          team={board.dinner_team}
          role="dinner"
          leader={dinnerIsA ? TEAM_A_MEMBERS[0] : TEAM_B_MEMBERS[0]}
          members={dinnerIsA ? TEAM_A_MEMBERS : TEAM_B_MEMBERS}
          isTeamA={dinnerIsA}
          isDinner={true}
        />
        {/* Clearing team */}
        <TeamCard
          team={board.clearing_team}
          role="clearing"
          leader={dinnerIsA ? TEAM_B_MEMBERS[0] : TEAM_A_MEMBERS[0]}
          members={dinnerIsA ? TEAM_B_MEMBERS : TEAM_A_MEMBERS}
          isTeamA={!dinnerIsA}
          isDinner={false}
        />
      </div>
    </motion.div>
  );
}
