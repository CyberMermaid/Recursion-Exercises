/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base Case: If array nums is empty, product is undefined.
  if (nums.length === 0){
    return undefined;
  }

  // Recursive case: Return the product of the first element of the array with the remaining array
  return nums[0]*product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  let longestString = "";
  for (let i = 0; i < words.length; i++) {
      if (
          typeof words[i] === "string" &&
          words[i].length > longestString.length
      ) {
          longestString = words[i];
      }
  }
  return longestString.length;
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
// Base/Terminal Case: If the string is empty, return empty string
if (str <= 1){
  return str;
} else{
  return str.charAt(0) + everyOther(str.substr(2)); }
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  let length = str.length;
  // Base Case: If the string has 0 or 1 character, return true
  if(length >= 1){
    return true;
  } else{
    if (str[0] === str[length - 1]) {
      return isPalindrome(str.slice(1, length - 1) );
    } 
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {
// IndexOf
  // Base Case: array is empty or val doesn't exist in array
  if (arr.length ===0 || arr.indexOf(val)=== -1){
    return -1;
  } 
  // Recursive case: first element of the array equals val
  else if (arr[0]===val){
    return 0;
  } else {
    return findIndex(arr.slice(1), val);
  }
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
// Base/Terminal Case: If the string is empty, return empty string
  if (str === ""){
    return "";
  } else{
    return revString(str.substr(1)) + str.charAt(0);
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  if (right >= left) {
    let mid = low + Math.floor((high - low) / 2);
    // Base Case: If the element is present at the middle
    // itself
    if (arr[mid] === val){
        return mid;
      }
    // If element is smaller than mid, then
    // it can only be present in left subarray
    else if (arr[mid] > val){
        return binarySearch(arr.slice(low, mid), val); 
      }
    // Else the element can only be present
    // in right subarray
    return binarySearch(arr.slice(mid + 1), val);
}
// Return -1 if element is not in arr
return -1;
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