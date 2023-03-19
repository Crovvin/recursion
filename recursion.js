/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0, longestWord = 0) {
  if (index === words.length) return longestWord;
  longestWord = Math.max(words[index].length, longestWord);
  return longest(words, index + 1, longestWord);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, str2 = "", index = 0) {
  if (index >= str.length) return str2;
  str2 += str[index];
  return everyOther(str, index + 2, str2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  let leftIndex = index;
  let rightIndex = str.length - index - 1;
  if (str[leftIndex] !== str[rightIndex]) return false;
  if (leftIndex >= rightIndex) return true;
  return isPalindrome(str, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index === arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, str2 = "") {
  if (str.length === str2.length) return str2;
  str2 += str[str.length - 1 - index];
  return revString(str, index + 1, str2);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let array = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") array.push(obj[key]);
    if (typeof obj[key] === "object") array.push(...gatherStrings(obj[key]));
  }
  return array;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
