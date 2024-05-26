export const getDaysNumber = (time = 0) => {
  return Math.floor(time / (1000 * 60 * 60 * 24));
};