const maxNumInArray = (arr,size) => {
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < size; i++) {
        max<arr[i]?max = arr[i]:max=max;
    }
    return max;
}

console.log(maxNumInArray([1,2,3,4,15,6,7,8,9,10],10))