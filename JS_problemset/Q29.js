let capitliseFirstLetter = (sen) => {
    let ans = ""
    let word = true;
    let space = true;
    let temp = '';
    for (let i = 0; i < sen.length; i++) {
        const ele = sen[i];
        if (ele == ' ' && word == true) {
            space = true
            word = false
            if (i != 0) {
                ans += temp + ' ';
                temp = '';
            }
        } else if (ele != ' ') {
            if (space) {
                temp += ele.toUpperCase();
            } else {
                temp += ele;
            }
            space = false
            word = true
        }
    }
    return ans;

}

console.log(capitliseFirstLetter("     this   is a sentence       "));