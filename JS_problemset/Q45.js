// //  convert to roman numerals
// const revStr = (str) => {
//     let rev = "";
//     for (let i = str.length -1 ; i >= 0; i--) {
//         rev+=str[i];
//     }
//     return rev;
// }

// const toRoman = (num , mp) => {

//     //  breaking the number
//     let n = num;
//     let numArr =[] ;
//     while(n > 0){
//         let rem = n%10;
//         numArr.length == 0 ? numArr.push(rem) :numArr.push( (rem) * ( Math.pow(10,numArr.length)));
//         n = Math.floor(n/10);
//     }

//     for (let i = 0; i < numArr.length; i++) {

//     }

// }

// console.log(toRoman(233));

const toRoman = (num) => {
  let finalNumInRoman = "";
  let romanNumArray = ["I", "V", "X", "L", "C", "D", "M"];
  let mp = new Map();
  mp.set("I", 1);
  mp.set("V", 5);
  mp.set("X", 10);
  mp.set("L", 50);
  mp.set("C", 100);
  mp.set("D", 500);
  mp.set("M", 1000);

  // getting and using unit , 10s, 100s, 1000s place
  let n = num;
  let n_arr = [];
  while (n > 0) {
    let rem = n % 10;
    n_arr.length == 0
      ? n_arr.unshift(rem)
      : n_arr.unshift(rem * Math.pow(10, n_arr.length));
    n = Math.floor(n / 10);
  }

//   console.log(n_arr);
  for (let i = 0; i < n_arr.length; i++) {
    let tmp = n_arr[i];
    for (let j = romanNumArray.length - 1; j >= 0; j--) {
      let rom_num_in_dec = mp.get(romanNumArray[j]);
      let x = Math.floor(tmp / rom_num_in_dec);
    //   console.log(tmp , x);
      if (x == 0) {
        continue;
      }
      let tmp_str = "";
      switch (tmp) {
        case 4:
          tmp_str = "IV";
          tmp = 0;
          break;
        case 9:
          tmp_str = "IX";
          tmp = 0;
          break;
        case 40:
          tmp_str = "XL";
          tmp = 0;
          break;
        case 90:
          tmp_str = "XC";
          tmp = 0;
          break;
        case 400:
          tmp_str = "CD";
          tmp = 0;
          break;
        case 900:
          tmp_str = "CM";
          tmp = 0;
          break;
        default:
          break;
      }
      if (tmp_str.length != 0) {
        finalNumInRoman+=tmp_str;
      } else {
        tmp_str = "";
        let k = 0;
        for (k = 0; k < x; k++) {
          tmp_str+=romanNumArray[j];
        }
        if (k != 0) {
          finalNumInRoman+=tmp_str;
        }
    }
   
      tmp = tmp % rom_num_in_dec;
      if (tmp == 0) {
        break;
      }
    }
}
  return finalNumInRoman;
};

// checking different varieties of cases
console.log(toRoman(4));
console.log(toRoman(9));
console.log(toRoman(40));
console.log(toRoman(90));
console.log(toRoman(400));
console.log(toRoman(900));
console.log(toRoman(3));
console.log(toRoman(58));
console.log(toRoman(1994));
console.log(toRoman(3999));
console.log(toRoman(233));
console.log(toRoman(1234));
