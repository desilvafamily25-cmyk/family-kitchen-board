import type { TeamMember } from '../types';

interface Props {
  member: TeamMember;
  size?: 'sm' | 'md';
}

export function MemberChip({ member, size = 'md' }: Props) {
  const initial = member.name[0].toUpperCase();
  return (
    <div
      className={`
        flex items-center gap-1.5 rounded-full font-medium ring-2
        ${member.bgClass} ${member.textClass} ${member.ringClass}
        ${size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'}
      `}
    >
      <span
        className={`
          flex items-center justify-center rounded-full font-bold text-white flex-shrink-0
          ${size === 'sm' ? 'w-4 h-4 text-[9px]' : 'w-5 h-5 text-[10px]'}
        `}
        style={{ backgroundColor: member.color }}
      >
        {initial}
      </span>
      <span>{member.nickname}</span>
    </div>
  );
}
