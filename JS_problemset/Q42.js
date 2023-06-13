//  most frequent element in an array

const mostFreqEle = (arr) => {
  let mp = new Map();
  let max = -1;
  let ans;
  for (let i = 0; i < arr.length; i++) {
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
      if (mp.get(arr[i]) > max) {
        max = mp.get(arr[i]);
        ans = arr[i];
      }
    } else {
      mp.set(arr[i], 1);
    }
  }

  return ans;
};

console.log(
  mostFreqEle([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 1, 2, 3, 4, 1,
    2, 3, 1, 2, 2, 2, 2, 2
  ])
);
