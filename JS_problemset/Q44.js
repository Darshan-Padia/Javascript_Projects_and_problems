// checking if given number is perfecrt or not..

const isPerfect = (num) => {
    let sum = 0;
    for (let i = 0; i <= num/2 ; i++) {
        if (num % i == 0) {
            sum+=i;
        }      
    }
    return sum == num ? true : false;
}

console.log(isPerfect(6));