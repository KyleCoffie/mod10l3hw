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