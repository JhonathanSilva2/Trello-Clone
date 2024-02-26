/**
 * Capitalizes the first letter of each word in a string.
 * 
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 */
export default function capitalize(str:string): string {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }