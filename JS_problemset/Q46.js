// checking pangram

const isPangram = (str) => {
    str = str.toLowerCase()
    chkArray = new Array().fill(false)
    for (let i = 0; i < str.length; i++) {
        if(str[i] != ' ')
        chkArray[str.charCodeAt(i) - 97] = true
    }

    for (let i = 0; i < chkArray.length; i++) {
        if(!chkArray[i])
        return false
    }
    return true;
}


console.log(isPangram('The quick brown fox jumps over the lazy dog'));