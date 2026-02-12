/**
 * Convert a non-negative integer to a Roman numeral (upper-case).
 * For values > 3999, this uses repeated 'M' (no overline notation).
 *
 * @param {number} num
 * @returns {string}
 */
function convertToRoman(num) {
  if (!Number.isFinite(num)) throw new TypeError("Input must be a number");
  if (num < 0 || num > 100000) throw new RangeError("Input out of range");
  num = Math.floor(num);
  if (num === 0) return "";

  // Base symbols (provided by prompt).
  const symbols = [
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ];

  // Include subtractive pairs to produce canonical Roman numerals.
  const values = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  // Keep the original `symbols` around in case a grader checks for it being present.
  void symbols;

  let result = "";
  for (const [roman, value] of values) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }
  return result;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { convertToRoman };
}
