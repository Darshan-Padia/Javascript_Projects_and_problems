//  reversing an array

const revArray = (arr , n ) => {
    if (n==0) {
        return
    }
    arr.push(arr[n-1]);
    revArray(arr , n-1);
    arr.splice(0,1);
}

let arr = [1,2,3,4,5,6,7,8,9];
revArray(arr , arr.length);
console.log(arr);


