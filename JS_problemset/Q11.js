const sumOfArayEle = (arr,n) => {
    if (n<=0) {
        return 0;
    }

    return arr[n-1] + sumOfArayEle(arr,n-1);
}

console.log(sumOfArayEle([6,3,3,4,5,6],6));

