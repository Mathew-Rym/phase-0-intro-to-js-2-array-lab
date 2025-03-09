// Write your solution here!
// Define the initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions (modify the original array)
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive functions (return a new array without modifying the original)
function appendCat(name) {
  return [...cats, name]; // Creates a new array with the new cat at the end
}

function prependCat(name) {
  return [name, ...cats]; // Creates a new array with the new cat at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first cat
}

// Exporting for testing purposes (if needed in Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat,
  };
}
