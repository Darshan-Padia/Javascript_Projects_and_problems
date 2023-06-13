//  finding gcd of two number ( greatest common divisor )

const GCD  = (num1, num2) => {
    let min = Math.min(num1,num2)
    let ans = 1;
    for(let i = 2 ; i <= min/2 ; i++){
        if (num1 % i == 0 && num2 % i == 0) {
            ans = Math.max(ans,i);
        }
    }
    return ans;
}

console.log(GCD(12, 15));
console.log(GCD(15, 12));
console.log(GCD(12, 12));
console.log(GCD(12, 13));
console.log(GCD(13, 12));
console.log(GCD(13, 13));
console.log(GCD(13, 1));