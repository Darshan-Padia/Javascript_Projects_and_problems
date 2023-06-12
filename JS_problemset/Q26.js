//  removing all empty whitespaces from the sentence :

let removeWhiteSpaces = (sen) => {
    let ans = ""
    let word = true;
    let space = true;
    let temp = '';
    for (let i = 0; i < sen.length; i++) {
        const ele = sen[i];
        if (ele == ' ' && word == true) {
            space = true
            word = false
            if(i!=0){
                ans += temp+ ' ';
                temp = '';
            }
        }else if (ele !=' '){
            space = false
            word = true
            temp += ele;
        }
    }
    return ans;

}

console.log(removeWhiteSpaces("     this   is a sentence       "));


