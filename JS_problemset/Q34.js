//  removing null and undefined values from an array 

const removeNullAndUndefValues = (arr) => {
    let s = arr.length;
    for (let i = 0; i < arr.length; i++) {
        // const element = array[i];
        if(arr[i] == null || arr[i] == 'undefined'){
            arr.splice(i,1);
            s--;
            i--;
        }
        
    }
}

let arr = [1,2,3,4,5,6,7,8,9,10, null, undefined, null, undefined, null, undefined, null, undefined]
removeNullAndUndefValues(arr)
console.log(arr);



