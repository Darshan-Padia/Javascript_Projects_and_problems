//  checking if a number is perfect square or not

const isPerfectSquare = (n) => {
    let i = 1;

    while((i*i) <= n){
        if (i*i == n) {
            return i;
        }
        i++;
    }
    return "not a perfect square";
}

console.log(isPerfectSquare(25));