//  checking armstrong number 


const isArmstrong = (n) => {
    let sum = 0;
    let num = n;
    while (n > 0) {
       sum += ((n%10)*(n%10)*(n%10));
        n = Math.floor(n/10);
    }
    return sum==num?true:false;
}

console.log(isArmstrong(153));
console.log(isArmstrong(163));

