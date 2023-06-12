//  reversing words in sentence

const revWordsInSen = (sen) => {
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

                for (let i = temp.length-1; i >=0 ; i--) {
                    ans+= temp[i];
                }
                ans += ' ';
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

console.log(revWordsInSen("     this   is a sentence       "));