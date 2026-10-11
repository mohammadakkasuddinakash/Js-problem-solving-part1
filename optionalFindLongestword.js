function findLongestWord(sentence){
    const words = sentence.split(' ');
    let longword = "";
    let longlength = 0;

    for(let word of words){
        if(word.length > longlength){
            longlength = word.length;
            longword = word;
        }
    }
    return longword;
}

const result = findLongestWord('I am learning Programming to become a programmer');
console.log(result);

// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// এবার তোমার পরবর্তী challenge
// তোমার existing code ব্যবহার না করে, একটি মাত্র for...of loop দিয়ে একই problem solve করার চেষ্টা করো।
// Hint: এবার word-এর length-এর array লাগবে না। দুটি variable রাখার কথা ভাবো:
// - longestWord
// - maxLength