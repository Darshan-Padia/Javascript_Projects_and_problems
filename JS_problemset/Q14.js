const removeDuplicates = (arr,size) => {
    let mp = new Map();
    for (let i = 0; i < size; i++) {
        if (mp.get(arr[i])==undefined) {
            mp.set(arr[i],1);
        }else{
            arr.splice(i,1);
            size--;
            i--;
        }
    }   
    return arr;
}

console.log(removeDuplicates([1,2,3,4,4,4,4,9,9,10],10))

