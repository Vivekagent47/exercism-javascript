/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let arr1 = "",
    arr2 = "";
  for (let i = 0; i < array1.length; i++) {
    arr1 += array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    arr2 += array2[i];
  }

  return Number(arr1) + Number(arr2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value == [...String(value)].reverse().join("");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field";
  }

  if (!Number(input) || Number(input) === 0) {
    return "Must be a number besides 0";
  }
  return "";
}
