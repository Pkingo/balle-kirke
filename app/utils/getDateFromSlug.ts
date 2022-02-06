export const getDateFromSlug = (slug: string): number => {
  const date = slug
    .split("-")
    .map((x) => parseInt(x))
    .filter(Boolean) as [number, number, number];
  return new Date(...date).getTime();
};
