const Range = (min, max) => {
  if (max < min) {
    [min, max] = [max, min];
  }

  return Array(max - min + 1).fill('').map((empty, index) => (index + min));
};

export default Range;
