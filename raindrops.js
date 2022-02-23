/**
 * Your task is to convert a number into a string that contains raindrop sounds corresponding to certain potential factors. A factor is a number that evenly divides into another number, leaving no remainder. The simplest way to test if a one number is a factor of another is to use the modulo operation.
 * The rules of raindrops are that if a given number:
 *  - has 3 as a factor, add 'Pling' to the result.
 *  - has 5 as a factor, add 'Plang' to the result.
 *  - has 7 as a factor, add 'Plong' to the result.
 *  - does not have any of 3, 5, or 7 as a factor, the result should be the digits of the number.
 *
 * @param {number} num
 * @returns string
 */

export const convert = (num) => {
  let res = "";
  if (num % 3 === 0) {
    res += "Pling";
  }
  if (num % 5 === 0) {
    res += "Plang";
  }
  if (num % 7 === 0) {
    res += "Plong";
  }
  if (res === "") {
    res += num;
  }

  return res;
};

/**
 * Another way to solve this problem is to use the modulo operator.
 *
 * @param {number} num
 * @returns
 */
const RAIN_MAPPING = {
  3: "Pling",
  5: "Plang",
  7: "Plong",
};
export const convert2 = (num) =>
  Object.entries(RAIN_MAPPING).reduce(
    (acc, [factor, rainDrop]) => (num % factor ? acc : acc + rainDrop),
    ""
  ) || `${num}`;
