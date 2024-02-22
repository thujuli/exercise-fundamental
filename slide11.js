// Create a function to convert excel sheet column title to its corresponding column number.
/**
 * Example:
 * A -> 1
 * B -> 2
 * ...
 * AB -> 28
 * */
const colTitleToColNum = (col) => {
  const chars = col.toLowerCase().split("");
  const values = [];
  chars.forEach((val) => values.push(val.charCodeAt() - 96));

  if (values.length === 1) {
    return values[0];
  } else if (values.length === 2) {
    return values[0] * 26 + values[1];
  }
};

console.log(colTitleToColNum("ab"));

// Given an array of integers nums, every element can appears twice except for one. Find that single one
const findAppearOnce = (nums) => {
  // idea, store every value in num to a array and check every value in nums.
  // when every value in nums then add to total++.
  // return value of index totalAppears only one appear (valueAppears[totalAppears === 1])
  let totalAppears = [];
  let valueAppears = [];
  for (let i = 0; i < nums.length; i++) {
    valueAppears.push(nums[i]);
    for (let j = 0; j < nums.length; j++) {
      if (totalAppears[i] === undefined) {
        totalAppears[i] = 0;
      }
      if (nums[i] === nums[j]) {
        totalAppears[i]++;
      }
    }
  }

  const idxForValueAppearOnce = totalAppears.indexOf(1);
  return valueAppears[idxForValueAppearOnce];
};

console.log(findAppearOnce([3, 9, 9, 2, 3]));

// Given two strings s and t, return true if t is anagram of s, and false otherwise
const anagram = (s, t) => {
  const sentence1 = s.toLowerCase().split("").sort().join("");
  const sentence2 = t.toLowerCase().split("").sort().join("");

  if (sentence1 === sentence2) {
    return true;
  }
  return false;
};

console.log(anagram("Anagram", "nagaram"));

// Climbing a staircase, it takse n teps to reach the top. You can either climb 1 or 2 steps. How many distict ways can you climb to the top
/**
 * 1 1 1 1 1
 * 1 1 1 2
 * 1 1 2 1
 * 1 2 1 1
 * 2 1 1 1
 * 1 2 2
 * 2 1 2
 * 2 2 1
 * */

const climb = (n) => {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  const deret = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    deret[i] = deret[i - 1] + deret[i - 2];
  }
  return deret[n];
};

console.log(climb(7));
