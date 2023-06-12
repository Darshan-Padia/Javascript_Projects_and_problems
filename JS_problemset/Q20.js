// counting number of words in a sentence

let numOfWords = (sen) => {
    let space = true;
    let word = true;
    let count = 0;

    for (let i = 0; i < sen.length; i++) {
        // const element = sen[i];
        if(sen[i] == ' ' && word == true){
            space = true;
            word = false
        }else if (sen[i] != ' ' && space == true){
            space = false;
            word = true;
            count ++;
        }
        
    }
    return count;

}


// checking rigorous cases

// 1. empty string
// 2. string with only spaces
// 3. string with only one word
// 4. string with only one word and spaces
// 5. string with only one word and spaces in the beginning
// 6. string with only one word and spaces in the end

//  now testing the above 6 by giving them as input to the function

console.log(numOfWords(""));
console.log(numOfWords(" "));
console.log(numOfWords("word"));
console.log(numOfWords(" word "));
console.log(numOfWords(" word"));
console.log(numOfWords("word "));

let sen = "     this   is a sentence       ";
console.log(numOfWords(sen));


