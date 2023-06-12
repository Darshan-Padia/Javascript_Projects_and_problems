// power of number

const power = (n,p) => {
    if(p==0){
        return 1;
    }
    return n* power(n,p-1);
}

// console.log(power(2,3));
// console.log(power(3,3));
// console.log(power(4,3));

//  now using memoization and recursion to calculate power of a number

const powerMemo = (n,p,memo={}) => {
    if(p==0){
        return 1;
    }
    if(memo[p]){
        return memo[p];
    }
    memo[p] = n* powerMemo(n,p-1,memo);
    return memo[p];
}

// giving inputs to both functions and comparing their time taken

console.time("power");
console.log(power(2,100));
console.timeEnd("power");

console.time("powerMemo");
console.log(powerMemo(2,100));
console.timeEnd("powerMemo");

//  other examples of memoization

//  fibonacci series

const fib = (n) => {
    if(n<=2){
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

//  now using memoization and recursion to calculate fibonacci series

const fibMemo = (n,memo={}) => {
    if(n<=2){
        return 1;
    }
    if(memo[n]){
        return memo[n];
    }
    memo[n] = fibMemo(n-1,memo) + fibMemo(n-2,memo);
    return memo[n];
}

// giving inputs to both functions and comparing their time taken

console.time("fib");
console.log(fib(40));
console.timeEnd("fib");

console.time("fibMemo");
console.log(fibMemo(40));
console.timeEnd("fibMemo");


