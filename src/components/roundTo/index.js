export const roundTo = (number, increment = 5) =>
  (Math.round(number) - (Math.round(number) % increment)) + increment