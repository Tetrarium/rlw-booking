export function formatMinutsToTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours.toString()}:${minutes.toString().padStart(2, '0')}`;
}

export function formatTimeToMinuts(time: string) {
  const [hours, minutes] = time.split(':');
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}

export function getTimeRange([start, end]: [number, number]) {
  return [
    formatMinutsToTime(start),
    formatMinutsToTime(end),
  ];
}

export function getMinutesRange([start, end]: [string, string]): [number, number] {
  return [
    formatTimeToMinuts(start),
    formatTimeToMinuts(end),
  ];
}