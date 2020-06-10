export default {
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get<T>(key: string): T | undefined {
    const stored = localStorage.getItem(key);

    if (!stored) {
      return undefined;
    }

    return JSON.parse(stored) as T;
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },
};
