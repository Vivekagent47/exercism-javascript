/**
 * A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past, the club has a very specific door policy which you'll need to master, before attempting entry.
 * There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you'll need to work out the password of the day.
 *
 * The password is always based on a poem and can be derived in a two-step process.
 * 1. The guard will recite the poem, one line at a time and you have to respond with an appropriate letter of that line.
 * 2. The guard will now tell you all the letters you responded with at once, and you need to write them down on a piece of paper in a specific format.
 *
 * The details of the process depend on which door you are trying to enter.
 */

/**
 * Respond with the correct character, given the line of the poem, if this were said at the front door.
 *
 * To determine the letters for the front door password, you need to respond with the first letter of the line of the poem, that the guard recites to you.
 * To end up with a nice password, the members of the poetry club like to use acrostic poems. This means that the first letter of each sentence forms a word. Here is an example by one of their favorite writers Michael Lockwood.
 *
 * So when the guard recites Stands so high, you'll respond S, when the guard recites Huge hooves too, you'll respond H.
 * Implement the function frontDoorResponse that takes a line of the poem as an argument and returns the first letter of that line.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
}

/**
 * Format the password for the front-door, given the response letters.
 *
 *Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.
 Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.
 *  
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

/**
 * Respond with the correct character, given the line of the poem, if this were said at the back door.
 *
 * To determine letters for the back door password, you need to respond with the last letter of the line of the poem that the guard recites to you.
 * The members of the poetry club are really clever. The poem mentioned before is also telestich, which means that the last letter of each sentence also forms a word:
 *
 * When the guard recites Stands so high, you'll respond h, when the guard recites Huge hooves too, you'll respond o.
 * Note that sometimes the guard does stylist pauses (in the form of whitespace) at the end of a line. You will need to ignore those pauses to derive the correct letter.
 * Implement the function backDoorResponse that takes a line of the poem as an argument and returns the last letter of that line that is not a whitespace character.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  const backResponse = line.trim().slice(-1);
  return backResponse;
}

/**
 * Format the password for the back door, given the response letters.
 *
 * To enter the poetry club via the back door, you need to be extra polite. So to derive the password, this time you need to correctly capitalize the word and add ', please' at the end.
 * Implement the function backDoorPassword that accepts a string (the combined letters you found in task 3) and returns the polite version of the capitalized password.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  const capFirstLetter = word.charAt(0).toUpperCase();
  const combineWord = word.slice(1);
  return `${capFirstLetter}${combineWord}, please`;
}
