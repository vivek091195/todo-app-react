const set = new Set();

export const generateRandomNDigitNumber = (n) => {
  const min = Math.pow(10, n - 1);
  const max = Math.pow(10, n) - 1;

  const id = Math.floor(Math.random() * (max - min + 1)) + min;
  if (set.has(id)) {
    generateRandomNDigitNumber(id);
  }

  set.add(id);
  return id;
};
