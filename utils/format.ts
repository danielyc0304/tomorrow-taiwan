export const formatDate = (date: string) => {
  return date.replaceAll("-", ".");
};

export const getYearMonth = (date: string): string => {
  const [year, month] = date.split("-");

  return `${year}.${month}`;
};
