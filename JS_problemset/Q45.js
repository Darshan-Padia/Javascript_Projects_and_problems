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
    let romanNumArray = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    let mp = new Map()
    mp.set("I", 1);
    mp.set("V", 5);
    mp.set("X", 10);
    mp.set("L", 50);
    mp.set("C", 100);
    mp.set("D", 500);
    mp.set("M", 1000);

    let ans = [0,0,0,0,0,0,0]
    for(let i = romanNumArray.length - 1 ; i >=0 ; i--){
        let rom_num_in_dec = mp.get(romanNumArray[i])
        let x = Math.floor(num/rom_num_in_dec)
        ans[i] = x;
        let rem = num % rom_num_in_dec 
        num = rem;
    }

    console.log(ans);
    for (let i = 0; i < ans.length; i++) {
        if(ans[i]> 3){

        }
    }
}

toRoman(499);