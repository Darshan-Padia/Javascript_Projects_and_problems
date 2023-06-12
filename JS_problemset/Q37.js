//  reversing an integer

const revInt = (n) => {
    let ans = 0;
    while(n>0){
        ans = (ans*10) + (n%10);
        n = Math.floor(n/10);
    }
    return ans;
}

console.log(revInt(1234));