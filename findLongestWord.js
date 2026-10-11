function findLongestWord(sentence){
    const words = sentence.split(' ');
    let length = [];
    for(let word of words){
        length.push(word.length);
        
    }
    // console.log(length);
    const longLen = Math.max(...length);
    // console.log(longLen);

    for(let word of words){
        if(word.length === longLen){
            // console.log(word);
            return word;
        }
    }

}
const result = findLongestWord("I am learning Programming to become a programmer");
console.log(result);

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

