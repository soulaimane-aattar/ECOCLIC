const shortDate = { year: "numeric", month: "2-digit", day: "2-digit" };
export const formatDate = (d) => {
  return new Date(d).toLocaleDateString("fr-FR", shortDate);
};
