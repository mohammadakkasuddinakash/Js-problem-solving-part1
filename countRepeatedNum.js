function countRepeatedNum(numbers, find){
    let count = 0;

    for(let number of numbers){
        if(number === find){
            count = count + 1;
        }
    }
    return count;

}

// const numOfCount = countRepeatedNum([5,6,11,12,98, 5], 5);
// console.log(numOfCount);
const numOfCount = countRepeatedNum([5,6,11,12,98, 5], 25);
console.log(numOfCount);

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0