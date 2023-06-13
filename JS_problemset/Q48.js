//  longest palindrome in a substring of string

const longestPalindromicSubstring = (str) => {
    let paliStrings = []
    let size = str.length
    let x = false;
    for (let i = 0; i < str.length; i++) {
        for (let j = size - 1; j > i; j--) {
            if (str[i] == str[j]) {
                x = true;
                let ind = i ;
                let r = j - (j-i)/2
                for (let k = j; k >= r; k--) {
                    if(str[ind++] != str[k]){

                        x = false;
                        break;
                    }
                }
                if (x) {
                    paliStrings.push(str.substring(i, j+1));
                }
            }
        }        
        
    }
    // return paliStrings[0];
    let max  =paliStrings.reduce((a, b) => a.length > b.length ? a : b, '');
    return paliStrings[0] == undefined ? size == 1?str: str[0] : max;
    //  returning the maximum length substring palindrome
    return max ;
    
    
}

console.log(longestPalindromicSubstring('babad'));
console.log(longestPalindromicSubstring('cbbd'));
console.log(longestPalindromicSubstring('a'));
console.log(longestPalindromicSubstring('ac'));
console.log(longestPalindromicSubstring('bb'));
console.log(longestPalindromicSubstring('abb'));
console.log(longestPalindromicSubstring('aacabdkacaa'));




