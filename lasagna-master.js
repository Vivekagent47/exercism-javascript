/**
 * Determine whether the lasagna is done
 *
 * When you have lasagna in the oven, you want to know whether you can already take it out or not. To make sure the lasagna does not burn in the oven, you usually set a timer. But sometimes you forget about that.
 * Write a function cookingStatus with that accepts the remaining time on the timer in minutes as a parameter. The function has three possible results
 * If the timer shows 0, it should return 'Lasagna is done.'
 * If the timer shows any other number, the result should be 'Not done, please wait.'
 * If the function is called without a timer value, the result should be 'You forgot to set the timer.'.
 *
 * @param {number} time
 * @returns string
 */
export function cookingStatus(time) {
  if (time === 0) {
    return "Lasagna is done.";
  } else if (time > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
}

/**
 * Estimate the preparation time
 *
 * For the next lasagna that you will prepare, you want to make sure you have enough time reserved so you can enjoy the cooking. You already made a plan which layers your lasagna will have. Now you want to estimate how long the preparation will take based on that.
 *
 * Implement a function preparationTime that accepts an array of layers and the average preparation time per layer in minutes. The function should return the estimate for the total preparation time based on the number of layers. If the function is called without providing the average preparation time, 2 minutes should be assumed instead.
 *
 * @param {Array[string]} layers
 * @param {Number} timePerLayer
 * @returns Number
 */
export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

/**
 * Compute the amounts of noodles and sauce needed
 *
 * Besides reserving the time, you also want to make sure you have enough sauce and noodles to cook the lasagna of your dreams. For each noodle layer in your lasagna, you will need 50 grams of noodles. For each sauce layer in your lasagna, you will need 0.2 liters of sauce.
 *
 * Define the function quantities that takes an array of layers as a parameter. The function will then determine the quantity of noodles and sauce needed to make your meal. The result should be returned as an object with keys noodles and sauce.
 *
 * @param {Array[string]} ingredients
 * @returns Object
 */
export function quantities(ingredients) {
  return {
    noodles: ingredients.filter((i) => i === "noodles").length * 50,
    sauce: ingredients.filter((i) => i === "sauce").length * 0.2,
  };
}

/**
 * Add the secret ingredient
 *
 * A while ago you visited a friend and ate lasagna there. It was amazing and had something special to it. The friend sent you the list of ingredients and told you the last item on the list is the "secret ingredient" that made the meal so special. Now you want to add that secret ingredient to your recipe as well.
 *
 * Write a function addSecretIngredient that accepts two arrays of ingredients as parameters. The first parameter is the list your friend sent you, the second is the ingredient list for your own recipe. The function should add the last item from your friend's list to the end of your list. The array that represents your recipe should be modified directly and the function should not return anything. However, the first argument should not be modified.
 *
 * @param {Array[string]} friendList
 * @param {Array[string]} myList
 */
export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
}

/**
 * Scale the recipe
 *
 * The amounts listed in your cookbook only yield enough lasagna for two portions. Since you want to cook for more people next time, you want to calculate the amounts for different numbers of portions.
 *
 * Implement a function scaleRecipe that takes two parameters.
 * A recipe object that holds the amounts needed for 2 portions. The format of the object can be seen in the example below.
 * The number of portions you want to cook.
 *
 * The function should return a recipe object with the amounts needed for the desired number of portions. You want to keep the original recipe though. This means, in this task the recipe argument should not be modified.
 *
 * @param {Object} recipe
 * @param {Number} amount
 * @returns object
 */
export function scaleRecipe(recipe, amount) {
  const scaled = {};
  for (const key in recipe) {
    scaled[key] = (recipe[key] * amount) / 2;
  }
  return scaled;
}
