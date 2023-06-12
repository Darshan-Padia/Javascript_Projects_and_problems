//  calculate exponentiation using simple recursion and then with recursion and memoization together then comparing the time taken be each

// calculate exponentiation using simple recursion
const pow = (base, exp) => {
    if (exp == 0) {
        return 1;
    }
    return base * pow(base, exp - 1);
}

// calculate exponentiation using recursion and memoization
const powMemo = (base, exp, memo = {}) => {
    if (exp == 0) {
        return 1;
    }
    if (memo[exp]) {
        return memo[exp];
    }
    memo[exp] = base * powMemo(base, exp - 1, memo);
    return memo[exp];
}

// now comparing the time taken by each
console.time("pow");
console.log(pow(2,100));
console.timeEnd("pow");

console.time("powMemo");
console.log(powMemo(2,100));
console.timeEnd("powMemo");




