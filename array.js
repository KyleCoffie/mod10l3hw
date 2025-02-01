let fruits = ['apple', 'banana', 'orange'];
console.log("Original list:", fruits);
fruits.push('cherry');
console.log("Updated list:",fruits);
let lastFruit = fruits.pop();
console.log("Fruit to be deleted:", lastFruit);
console.log("Updated list:", fruits);

let numbers = [3, 1, 5, 2, 4];
console.log("Numbers out of order:", numbers)
numbers.sort((a,b)=>a-b);
console.log("Sorted numbers:", numbers)

function tripleNumbers(arr){
    return arr.map(num => num * 3);
}

console.log("Tripled numbers are:", tripleNumbers(numbers))

function filterNumber(arr){
    return arr.filter(num => num % 2 === 0 );
}
console.log("Even numbers of the list are:", filterNumber(numbers))

function sumNumbers(arr){
    return arr.reduce((arr,curr) => arr + curr,0)
}
console.log("Sum of list is:", sumNumbers(numbers))
// 1. Exploring Array Manipulation in JavaScript
// Objective: The aim of this assignment is to familiarize students with various array manipulation techniques in JavaScript, including adding and removing elements, transforming arrays, and applying array methods.

// Problem Statement: You are tasked with creating a JavaScript program that demonstrates different array manipulation operations. The program should cover adding and removing elements, sorting arrays, applying array methods such as map, filter, and reduce, and exploring the spread and rest operators.

// Task 1: Adding and Removing Elements

// Create an array containing some initial elements.
// Use the push method to add a new element to the end of the array.
// Use the pop method to remove the last element from the array.
// let fruits = ['apple', 'banana', 'orange'];
// Task 2: Sorting Arrays

// Create an array of numbers in random order.
// Use the sort method to sort the array in ascending order.
// let numbers = [3, 1, 5, 2, 4];
// Task 3: Applying Array Methods

// Create an array of numbers.
// Use the map method to double each number in the array.
// Use the filter method to filter out even numbers from the array.
// Use the reduce method to calculate the sum of all numbers in the array.
// let numbers = [3, 1, 5, 2, 4];
// Expected Outcomes: Upon completion of this assignment, students should gain a thorough understanding of array manipulation techniques in JavaScript, including adding and removing elements, sorting arrays, and applying array methods such as map, filter, and reduce. They should also be familiar with using the spread and rest operators for array manipulation.