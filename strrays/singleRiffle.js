// Determine if a deck has been shuffled by a single riffle
// This means the top card of deck has to be the same top card of one half

// Quadratic because we slice and create new copies of array each time
// O(n^2) time and O(n^2) space
var isSingleRiffleRecur = (half1, half2, deck) => {
  if (deck.length === 0) {
    return true;
  }
  // If the cards between half1 and deck match
    // 'Discard' the top cards and recurse again
  if (half1.length && half1[0] === deck[0]) {
    return isSingleRiffleRecur(half1.slice(1), half2, deck.slice(1));
  } else if (half2.length && half2[0] === deck[0]) {
    return isSingleRiffleRecur(half1, half2.slice(1), deck.slice(1));
  } else {
    // If the top cards are ever unequal, 
    // then return false because the deck is not single riffle
    return false;
  }
};

// Linear --- O(n) time and O(1) space
var isSingleRiffleIter = (half1, half2, deck) => {
  // Initialize indices for half1 and half2
  let half1Index = 0;
  let half2Index = 0;
  // Iterate through deck
  for (let i = 0; i < deck.length; i++) {
    // Check if top cards are equal AND make sure half decks' indices do not go out of bounds
    if (half1Index <= half1.length - 1 && half1[half1Index] === deck[i]) {
      // Since we discard the card, increment half1's index
      half1Index++;
    } else if (half2Index <= half2.length - 1 && half2[half2Index] === deck[i]) {
      // Since we discard the card, increment half2's index
      half2Index++;
    } else {
      // If the top cards are ever unequal, 
      // then return false because the deck is not single riffle
      return false;
    }
  }
  return true;
}

console.log(isSingleRiffleRecur([1,5,10,3], [2,6,9,4], [1,10,2,3,6,9,4]));
console.log(isSingleRiffleIter([1,5,10,3], [2,6,9,4], [1,10,2,3,6,9,4]));