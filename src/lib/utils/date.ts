import { formatDuration as formatDurationFns, intervalToDuration } from "date-fns";
import { ru } from "date-fns/locale";

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

export function getFormatTravelDurationParts(ms: number) {
  const duration = intervalToDuration({ start: 0, end: ms * 1000 });

  const formatted = formatDurationFns(duration, {
    format: ['hours', 'minutes'],
    locale: ru,
    zero: false,
    delimiter: '|'
  });

  return formatted.split('|');
}
