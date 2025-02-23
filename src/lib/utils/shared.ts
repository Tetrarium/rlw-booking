
export function typedEntries<T extends Record<string, unknown>>(obj: T): Array<[keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

export function mapEntries<T extends Record<string, unknown>, V>(
  obj: T,
  cb: (
    entry: [keyof T, T[keyof T]],
    index: number,
    arr: Array<[keyof T, T[keyof T]]>
  ) => V
): V[] {
  return typedEntries(obj).map(cb);
}