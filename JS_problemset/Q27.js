// finding longest word


let longestWord = (sen) => {
    let ans = ""
    let word = true;
    let space = true;
    let temp = '';
    let c = 0;
    for (let i = 0; i < sen.length; i++) {
        const ele = sen[i];
        if (ele == ' ' && word == true) {
            if (c>ans.length) ans = temp;
            c=0;
            space = true
            word = false
            
            temp = '';

        }else if (ele !=' '){
            space = false
            word = true
            temp += ele;
            c++;
        }
    }
    return ans;

}


console.log(longestWord("     this   is a sentence       "));



