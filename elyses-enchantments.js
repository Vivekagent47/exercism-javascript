/**
 * As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.
 * To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. The position of a certain card corresponds to the index in the array. That means position 0 refers to the first card, position 1 to the second card etc.
 */

/**
 * Retrieve card from cards array at the 0-based position
 *
 * To pick a card, return the card at index position from the given stack.
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return cards[position];
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * Perform some sleight of hand and exchange the card at index position with the new card provided. Return the adjusted stack.
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

/**
 * Insert newCard at the end of the cards array
 *
 * Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

/**
 * Remove the card at the 0-based position
 *
 * Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  const temp = cards.splice(position, 1);
  if (temp === undefined) {
    throw new Error(
      "The card has disappeared, but the stack has not changed in size. This magic trick has turned into actual magic. Perhaps a different method of removing the card will result in a stack that Elyse can work with..."
    );
  }
  return cards;
}

/**
 * Remove card from the end of the cards array
 *
 * Make a card disappear by removing the card at the top of the stack. Return the adjusted stack.
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

/**
 * Insert newCard at beginning of the cards array
 *
 * Make a card appear by inserting a new card at the bottom of the stack. Return the adjusted stack.
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

/**
 * Remove card from the beginning of the cards
 *
 * Make a card disappear by removing the card at the bottom of the stack. Return the adjusted stack.
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

/**
 * Compare the number of cards with the given stackSize
 *
 * Check whether the size of the stack is equal to stackSize or not.
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  if (cards.length === stackSize) {
    return true;
  }
  return false;
}
