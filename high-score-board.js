/**
 * In this exercise, you are implementing a way to keep track of the high scores for the most popular game in your local arcade hall.
 * You have 6 functions to implement, mostly related to manipulating an object that holds high scores.
 */

/**
 * Creates a new score board with an initial entry.
 *
 * Create a function createScoreBoard that creates an object that serves as a high score board. The keys of this object will be the names of the players, the values will be their scores. For testing purposes, you want to directly include one entry in the object. This initial entry should consist of The Best Ever as player name and 1000000 as score.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  return { "The Best Ever": 1000000 };
}

/**
 * Adds a player to a score board.
 *
 * To add a player to the high score board, define the function addPlayer. It accepts 3 parameters:
 * The first parameter is an existing score board object.
 * The second parameter is the name of a player as a string.
 * The third parameter is the score as a number.
 *
 * The function returns the same score board object that was passed in after adding the new player.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * If players violate the rules of the arcade hall, they are manually removed from the high score board. Define removePlayer which takes 2 parameters:
 * The first parameter is an existing score board object.
 * The second parameter is the name of the player as a string.
 *
 * This function should remove the entry for the given player from the board and return the board afterwards. If the player was not on the board in the first place, nothing should happen to the board. It should be returned as is.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

/**
 * Increases a player's score by the given amount.
 *
 * If a player finishes another game at the arcade hall, a certain amount of points will be added to the previous score on the board. Implement updateScore, which takes 3 parameters:
 * The first parameter is an existing score board object.
 * The second parameter is the name of the player whose score should be increased.
 * The third parameter is the score that you wish to add to the stored high score.
 *
 * The function should return the score board after the update was done.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * The arcade hall keeps a separate score board on Mondays. At the end of the day, each player on that board gets 100 additional points.
 *
 * Implement the function applyMondayBonus that accepts a score board. The function adds the bonus points for each player that is listed on that board. Afterwards, the board is returned.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for (let player in scoreBoard) {
    scoreBoard[player] += 100;
  }
  return scoreBoard;
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * Different arcade halls award different score points. To celebrate the best arcade player in town, a player's score needs to be normalized so scores from different arcade halls become comparable.
 *
 * Write a function normalizeScore. To practice your object skills, instead of two parameters this function should accept one object as a parameter. That object contains a key score with the value being a player's score (a number). There is also a second key normalizeFunction that has a function as its value. This function takes a score as an argument and returns the corrected score.
 *
 * Your function normalizeScore should return the normalized score that you get after applying the normalization function to the score that was passed in.
 *
 * @param {params} param the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(param) {
  return param.normalizeFunction(param.score);
}