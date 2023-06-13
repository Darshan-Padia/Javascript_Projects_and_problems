// · Description: Write a function that takes an array of numbers as input and returns the sum of the squares of those numbers.

const sumOfSquares = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element ** 2;
    });
    return sum;
}

console.log(sumOfSquares([1, 2, 3, 4, 5]));