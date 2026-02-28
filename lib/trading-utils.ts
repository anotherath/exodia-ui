export const getIntervalMs = (interval: string): number => {
  const unit = interval.slice(-1).toLowerCase();
  const val = parseInt(interval);
  if (unit === "m") return val * 60 * 1000;
  if (unit === "h") return val * 60 * 60 * 1000;
  if (unit === "d") return val * 24 * 60 * 60 * 1000;
  return 60 * 1000;
};
