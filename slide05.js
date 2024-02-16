// 1.1 get min, max, and avg from array without sort
const getMinMaxAvg = (arr) => {
  let lowest = 0;
  let higest = 0;

  for (let i = 0; i <= 0; i++) {
    let tempLowest = arr[i];
    let tempHigest = arr[i];

    for (let j = 0; j < arr.length; j++) {
      if (tempLowest > arr[j]) {
        tempLowest = arr[j];
      }
      if (tempHigest < arr[j]) {
        tempHigest = arr[j];
      }
    }

    lowest = tempLowest;
    higest = tempHigest;
  }

  let total = 0;
  for (const value of arr) {
    total += value;
  }
  const average = total / arr.length;
  return { lowest, higest, average };
};

console.log(getMinMaxAvg([12, 5, 23, 18, 4, 45, 32]));

// 1.2 get min, max, and avg from array with sort
const getMinMaxAvgWithSort = (arr) => {
  arr.sort((a, b) => a - b);
  const lowest = arr[0];
  const higest = arr[arr.length - 1];

  let total = 0;
  for (const value of arr) {
    total += value;
  }
  const average = total / arr.length;
  return {
    lowest,
    higest,
    average,
  };
};

console.log(getMinMaxAvgWithSort([12, 5, 23, 18, 4, 45, 32]));

// 2. Takes an array of words and returns concatenating the words in the array
// Example: arr = ["apple", "banana", "cherry", "date"]
// Return: apple, banana, cherry, and date
const arrToStr = (arr) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 2) {
      result += `${arr[i]}, and `;
    } else if (i === arr.length - 1) {
      result += arr[i];
    } else {
      result += `${arr[i]},`;
    }
  }

  return result;
};

console.log(arrToStr(["apple", "banana", "cherry", "date"]));

// 3. Write a function to split a string and convert into an array of words
// Example: "Hello World" => ["Hello", "World"]
const splitCloning = (sentence, sep) => {
  const arr = [];
  let temp = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sep === "") {
      arr.push(sentence[i]);
    } else if (sentence[i] !== sep) {
      temp += sentence[i];
    } else {
      arr.push(temp);
      temp = "";
    }
  }

  if (temp) {
    arr.push(temp);
  }
  return arr;
};

console.log(splitCloning("Hello World", " "));
console.log("Hello World".split(" "));

// 4. Write a function to calculate each element in the same position from two array of integer
// Example: [1,2,3]+[3,2,1] => [4,4,4]
const calculateArr = (arr1, arr2) => {
  const newArr = [];
  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      arr2[i] === undefined
        ? newArr.push(arr1[i] + 0)
        : newArr.push(arr1[i] + arr2[i]);
    }
  } else {
    for (let i = 0; i < arr2.length; i++) {
      arr1[i] === undefined
        ? newArr.push(arr2[i] + 0)
        : newArr.push(arr2[i] + arr1[i]);
    }
  }
  return newArr;
};

console.log(calculateArr([1, 2, 3], [3, 2, 1, 7, 9]));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array
// Example: [1,2,3,4] => 4 => [1,2,3,4]
// Example: [1,2,3,4] => 7 => [1,2,3,4,7]
const addElementToArr = (arr, newElement) => {
  let isInArray = false;
  for (const value of arr) {
    if (value === newElement) {
      isInArray = true;
      break;
    }
  }

  if (!isInArray) {
    arr.push(newElement);
  }
  return arr;
};

console.log(addElementToArr([1, 2, 3, 4], 10));
