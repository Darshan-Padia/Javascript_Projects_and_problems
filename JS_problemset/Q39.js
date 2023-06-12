//  finding the second largest number in an array without sorting 

const secLargerstNo = (arr) => {

    let max = arr[0];
    let sec_max = Math.min(...arr);

    for (const ele of arr) {
        if(ele > max){
            sec_max = max;
            max = ele;

        }if(ele > sec_max && ele < max){
            sec_max = ele
        }
    }
    return sec_max;
}

console.log(secLargerstNo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

// testing the above function with a variety of rigourous test cases
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(secLargerstNo(arr));
arr = [10,9,8,7,6,5,4,3,2,1];
console.log(secLargerstNo(arr));
arr = [1,1,1,1,1,1,1,1,1,1];
console.log(secLargerstNo(arr));
arr = [1,2,3,4,5,6,7,8,9,10,10,10,10,10,10];
console.log(secLargerstNo(arr));
arr = [10,10,10,10,10,10,10,10,10,10,1,2,3,4,5,6,7,8,9];
console.log(secLargerstNo(arr));
arr = [1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,1,2,3,4,5,6,7,8,9];
console.log(secLargerstNo(arr));
arr = [1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,1,2,3,4,5,6,7,8,9,10];
console.log(secLargerstNo(arr));
arr = [1,2,3,4,5,6,7,8,9,10,10,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10];
console.log(secLargerstNo(arr));