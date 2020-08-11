 const longestWord = text => {
    let bigArray = text.split(' ');
    let maxLength = 0;
    let result = "";
    for (const word of bigArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
};
 console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

/* const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu")); */
