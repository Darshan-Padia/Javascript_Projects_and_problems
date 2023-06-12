// checking anagram

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  str1 = sort(str1);
  str2 = sort(str2);
  if (str1 === str2) return true;
  else return false;
};

const sort = (str) => {
  let arr = str.split("");
  arr.sort();
  return arr.join("");
};

console.log(isAnagram("abc", "cba")); // true
console.log(isAnagram("abc", "cbd")); // false
