import { ROUTE_LABELS } from "./schema";

/** Flat list for header site search (path + display label). */
export const SEARCHABLE_ROUTES = Object.entries(ROUTE_LABELS)
  .filter(([path]) => path !== "/")
  .map(([path, label]) => ({ path, label }))
  .sort((a, b) => a.label.localeCompare(b.label));

export function filterRoutes(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return SEARCHABLE_ROUTES.filter(
    ({ path, label }) =>
      label.toLowerCase().includes(q) ||
      path.toLowerCase().includes(q.replace(/\s+/g, "-"))
  ).slice(0, 8);
}
