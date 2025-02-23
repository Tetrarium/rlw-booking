export function dateFormatToISO(date: Date) {
  return new Intl.DateTimeFormat('sv-SE').format(date);
};

export function dateFormatFromISO(date: string) {
  return new Date(date);
}

export function isValidDate(d: unknown): d is Date {
  return d instanceof Date && !isNaN(d.getTime());
}

export function extractTime(timestamp: number): string {
  return new Intl
    .DateTimeFormat('ru', {
      hour: '2-digit',
      minute: '2-digit',
    })
    .format(
      new Date(timestamp)
    );
}

export function formatDuration(duration: number): string {
  const minutes = (Math.round(duration / (60 * 1000)) % 60).toString().padStart(2, '0');
  const hours = duration / (60 * 60 * 1000) | 0;

  return `${hours}:${minutes}`;
}
