function countVowels(word){
    let count = 0;
    for(let alphabet of word){
        if ('aeiouAEIOU'.includes(alphabet)){
            count = count + 1;
        }
        // if('aeiou'.includes(alphabet.toLowerCase())){
        //     count++;
        // }
    }
    return count;
}

const result = countVowels('Amar sunar bangla, ami tumay valobasi');
console.log(result);


