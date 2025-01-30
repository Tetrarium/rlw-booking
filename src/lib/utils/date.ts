export function dateFormatToISO(date: Date) {
  return new Intl.DateTimeFormat('sv-SE').format(date);
};

export function dateFormatFromISO(date: string) {
  return new Date(date);
}

export function isValidDate(d: unknown): d is Date {
  return d instanceof Date && !isNaN(d.getTime());
}