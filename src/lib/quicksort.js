/**
 * quicksort - Tri rapide (quicksort) non-mutatif pour tableaux de valeurs comparables.
 *
 * @param {Array<number|string>} arr - Tableau à trier.
 * @returns {Array<number|string>} - Nouveau tableau trié.
 *
 * Exemples:
 * const sorted = quicksort([3,1,4,1,5,9]);
 * console.log(sorted); // [1,1,3,4,5,9]
 */
function quicksort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('quicksort: expected an array');
  }
  if (arr.length <= 1) return arr.slice();

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const equal = [];
  const right = [];

  for (const el of arr) {
    if (el < pivot) left.push(el);
    else if (el > pivot) right.push(el);
    else equal.push(el);
  }

  return quicksort(left).concat(equal, quicksort(right));
}

// CommonJS export
module.exports = quicksort;

// ES module default export (interop)
module.exports.default = quicksort;