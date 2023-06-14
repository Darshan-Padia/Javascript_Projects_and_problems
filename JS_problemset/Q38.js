
const powerSet = (arr,n) => {
    let ans = [];
    for(let i = 0 ; i < Math.pow(2,n) ; i++){
        let tmp = [];
        for(let j = 0 ; j < n ; j++){
            if(i & (1 << j)){
                tmp.push(arr[j]);
            }
        }

        ans.push(tmp);
        tmp = [];
        
    }
    return ans;
}

console.log(powerSet([1,2,3],3));