export const mapRange = (
  input: number,
  inputRange: [number, number],
  outputRange: [number, number],
) => {
  const slope =
    (outputRange[1] - outputRange[0]) / (inputRange[1] - inputRange[0]);
  return outputRange[0] + slope * (input - inputRange[0]);
};
