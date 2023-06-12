const countConsonanets = (str)  => {
    let c = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u' && str[i] != ' ' ) {
            if(str[i] >= 'a' && str[i] <= 'z'){
                c++;
            }
        }
    }
    return c;
}

console.log( countConsonanets("ariou") );