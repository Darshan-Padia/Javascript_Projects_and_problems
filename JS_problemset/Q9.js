/*
//  recursion practice
// Q1 - sum of all numbers upto n
const sumUptoN = (n) => {
    if(n<1){
        return 0;
    }

    return n + sumUptoN(n-1);
}
console.log(sumUptoN(10));

// Q2 - sum of all even numbers upto n
const sumEvenUptoN = (n) => {
    if(n<=2){
        return 2;
    }
   return n%2 ==0 ? n+ sumEvenUptoN(n-2): n+ sumEvenUptoN(n-1)
    // return n + sumUptoN(n-1);
}

console.log(sumEvenUptoN(10));

// Q3 - sum of all odd numbers upto n
const sumOddUptoN = (n) => {
    if(n<=1){
        return 1;
    }
   return n%2 ==0 ? (n-=1)+ sumOddUptoN(n-2): n+ sumOddUptoN(n-2)
    // return n + sumUptoN(n-1);
}

console.log(sumOddUptoN(10));

// Q4 - sum of all numbers in an array

const sumOfArayEle = (arr,n) => {
    if (n<=0) {
        return 0;
    }

    return arr[n-1] + sumOfArayEle(arr,n-1);
}

console.log(sumOfArayEle([6,3,3,4,5,6],6));

// Q5 - sum of all even numbers in an array

const sumOfEvenArayEle = (arr,n) => {
    if (n<=0) {
        return 0;
    }

    return arr[n-1]%2 == 0 ? arr[n-1] + sumOfEvenArayEle(arr,n-1): sumOfEvenArayEle(arr,n-1);
}

console.log(sumOfEvenArayEle([6,3,3,4,5,6],6));

// Q6 - sum of all odd numbers in an array

const sumOfOddArayEle = (arr,n) => {
    if (n<=0) {
        return 0;
    }

    return arr[n-1]%2 != 0 ? arr[n-1] + sumOfOddArayEle(arr,n-1): sumOfOddArayEle(arr,n-1);
}

console.log(sumOfOddArayEle([6,3,3,4,5,6],6));

// Q7 - sum of all digits of a number

const sumOfDigits = (n) => {
    if(n<= 0){
        return 0;
    }
    return n%10 + sumOfDigits(Math.trunc(n/10));
}

console.log(sumOfDigits(5234));

// Q8 - sum of all even digits of a number

const sumOfEvenDigits = (n) => {
    if(n<= 0){
        return 0;
    }
    return n%2==0?n%10 + sumOfEvenDigits(Math.trunc(n/10)):sumOfEvenDigits(Math.trunc(n/10));
}

console.log(sumOfEvenDigits(5234));

// Q9 - sum of all odd digits of a number

const sumOfOddDigits = (n) => {
    if(n<= 0){
        return 0;
    }
    return n%2!=0?n%10 + sumOfOddDigits(Math.trunc(n/10)):sumOfOddDigits(Math.trunc(n/10));
}

console.log(sumOfOddDigits(5234));

// Q10 - sum of all elements in a 2D array

// const Sum2dArray = (arr,m,n) => {
//     if(m<=0){
//         return 0;
//     }
//     return sumOfArayEle(arr[m-1],n) + Sum2dArray(arr,m-1,n);
// }

//  now without using sumOfArayEle function with recursion only no for loop

const Sum2dArray = (arr,m,n) => {

    if(m<=0){
        return 0;
    }
    if(n<=0){
        return Sum2dArray(arr,m-1,arr[m-1].length);
    }
    return arr[m-1][n-1] + Sum2dArray(arr,m,n-1);
}


console.log(Sum2dArray([[1,2,3],[4,5,6],[7,8,9]],3,3));

// Q11 - sum of all even elements in a 2D array

const Sum2dArrayEven = (arr,m,n) => {

    if(m<=0){
        return 0;
    }
    if(n<=0){
        return Sum2dArrayEven(arr,m-1,arr[m-1].length);
    }
    return arr[m-1][n-1] %2 == 0 ?arr[m-1][n-1] + Sum2dArrayEven(arr,m,n-1):Sum2dArrayEven(arr,m,n-1);
}

console.log(Sum2dArrayEven([[1,2,3],[4,5,6],[7,8,9]],3,3));

// Q12 - sum of all odd elements in a 2D array


const Sum2dArrayOdd = (arr,m,n) => {

    if(m<=0){
        return 0;
    }
    if(n<=0){
        return Sum2dArrayOdd(arr,m-1,arr[m-1].length);
    }
    return arr[m-1][n-1] %2 != 0 ?arr[m-1][n-1] + Sum2dArrayOdd(arr,m,n-1):Sum2dArrayOdd(arr,m,n-1);
}

console.log(Sum2dArrayOdd([[1,2,3],[4,5,6],[7,8,9]],3,3));

// lets practice other type of questions for recursion

// Q1 - print all numbers from 1 to n

const printN = (n) => {
    if (n<=0) {
        return 0;
    }
    return printN(n-1),console.log(n);
}

console.log(printN(10));
*/
// enough 


// original question 9 - · Description: Write a reursive function that generates and returns the Fibonacci series up to a given number of term.

const fibo = (n) => {
    if (n<=1) {
        return n;
    }
    return fibo(n-1) + fibo(n-2);
}

const fiboSeries = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(fibo(i));
    }
}

fiboSeries(10);





