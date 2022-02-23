/**
 * Given a moment, determine the moment that would be after a gigasecond has passed.
 * A gigasecond is 10^9 (1,000,000,000) seconds.
 *
 * @param {Date} time
 * @returns {Date} futureTime
 */

export const gigasecond = (time) => {
  let date = time.getTime();
  const gs = Math.pow(10, 12);
  let futureTime = date + gs;

  return new Date(futureTime);
};
