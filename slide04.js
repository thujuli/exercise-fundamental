// Exercise 1
// Create a triangle pattern according to the height
// Example height = 3
// 01
// 02 03
// 04 05 06
const createTriangle = (height) => {
  let result = "";
  let count = 1;
  for (let i = 0; i <= height; i++) {
    for (let j = 0; j < i; j++) {
      result += count.toString() + " ";
      count++;
    }
    result += "\n";
  }
  return result;
};

console.log(createTriangle(3));

// Exercise 2
// Create a function that can loop the number of times according to the input we provide, and replace "multiples of 3" with "Fizz", "multiples of 5" with "Buzz", "multiples of 3 and 5" with "FizzBuzz"
const fizzBuzz = (n) => {
  const result = [];
  for (let index = 1; index <= n; index++) {
    const multiples3and5 = !(index % 3) && !(index % 5);
    const multiples3 = !(index % 3);
    const multiples5 = !(index % 5);

    if (multiples3and5) {
      result.push("FizzBuzz");
    } else if (multiples3) {
      result.push("Fizz");
    } else if (multiples5) {
      result.push("Buzz");
    } else {
      result.push(index);
    }
  }
  return result;
};

// Exercise 3
// Create a function to calculate Body Mass Index (BMI)
// Formula: BMI = weight(kg)/(height(meter))2
const bodyMassIndex = (weight, height) => {
  const formula = weight / Math.pow(height, 2);
  let result = "";

  if (formula < 18.5) {
    result = "less weight";
  } else if (formula <= 24.9) {
    result = "ideal";
  } else if (formula <= 29.9) {
    result = "overweight";
  } else if (formula <= 39.9) {
    result = "very overweight";
  } else {
    result = "obesity";
  }
  return result;
};

// Exercise 4
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example: [1,2,3,4,5] => [2,4]
const removeOdd = (array) => array.filter((item) => !(item % 2));

// Exercise 5
// Write a function to split a string and convert it into an array of words
// Example: "Hello World"
// const splitStrToArr = (str) => str.split(" ");
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

console.log(splitCloning("Hello World", "W"));
console.log("Hello World".split("W"));
