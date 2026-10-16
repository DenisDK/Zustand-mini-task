export function getById<T extends { id: string }>(
  items: T[],
  id: string,
): T | undefined {
  return items.find((item) => item.id === id);
}

export function getByProperty<T, K extends keyof T>(
  items: T[],
  key: K,
  value: T[K],
): T | undefined {
  return items.find((item) => item[key] === value);
}
