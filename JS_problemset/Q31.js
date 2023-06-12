// calculate median

const median = (arr) => {
    arr.sort();
    let len = arr.length;
    return len % 2 == 0 ? (arr[len / 2] + arr[len / 2 - 1]) / 2 : arr[Math.floor(len / 2)];
}

console.log(median([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 5

