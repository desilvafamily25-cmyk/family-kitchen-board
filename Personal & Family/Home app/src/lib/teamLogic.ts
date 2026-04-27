import type { Team } from '../types';

/**
 * Parse a "YYYY-MM-DD" string into a local midnight Date.
 * Using `new Date(str)` would parse as UTC, so we split manually.
 */
function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/**
 * Determine which team cooks and which team clears for a given date.
 *
 * Logic: count calendar days from the base date (when Team A cooks).
 * Even offset → Team A cooks. Odd offset → Team B cooks.
 */
export function getTeamsForDate(
  dateStr: string,
  baseTeamADinnerDate: string
): { dinnerTeam: Team; clearingTeam: Team } {
  const base = parseLocalDate(baseTeamADinnerDate);
  const target = parseLocalDate(dateStr);
  const diffDays = Math.round(
    (target.getTime() - base.getTime()) / (1000 * 60 * 60 * 24)
  );
  const teamAIsDinner = diffDays % 2 === 0;
  return {
    dinnerTeam: teamAIsDinner ? 'A' : 'B',
    clearingTeam: teamAIsDinner ? 'B' : 'A',
  };
}
