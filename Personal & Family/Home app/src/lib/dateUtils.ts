export const MELBOURNE_TZ = 'Australia/Melbourne';

/** Returns today's date in Melbourne as "YYYY-MM-DD" */
export function getMelbourneDate(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: MELBOURNE_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

/** Returns 0=Sun, 1=Mon … 6=Sat for the current Melbourne day */
export function getMelbourneDayOfWeek(): number {
  const day = new Intl.DateTimeFormat('en-US', {
    timeZone: MELBOURNE_TZ,
    weekday: 'long',
  }).format(new Date());
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day);
}

/** True on Melbourne Mon–Fri */
export function isWeekday(): boolean {
  const d = getMelbourneDayOfWeek();
  return d >= 1 && d <= 5;
}

/** Long human-readable date for the header, Melbourne time */
export function formatDisplayDate(): string {
  return new Intl.DateTimeFormat('en-AU', {
    timeZone: MELBOURNE_TZ,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());
}
