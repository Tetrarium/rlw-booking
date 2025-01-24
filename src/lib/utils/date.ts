export function dateFormatToISO(date: Date) {
  return date.toISOString().slice(0, 10);
};

export function dateFormatFromISO(date: string) {
  return new Date(date);
}

export function isValidDate(d: unknown): d is Date {
  return d instanceof Date && !isNaN(d.getTime());
}