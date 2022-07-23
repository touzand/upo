export const formatAsPercent = (num) => {
  return new Intl.NumberFormat("default", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(num / 100);
};


