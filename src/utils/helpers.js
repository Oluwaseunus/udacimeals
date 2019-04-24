export const capitalize = word => {
  if (word) return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
};
