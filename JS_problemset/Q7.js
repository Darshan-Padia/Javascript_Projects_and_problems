const countVowels = (str)  => {
    let c = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ) {
            c++;
        }
    }
    return c;
}

console.log( countVowels("ariou") );