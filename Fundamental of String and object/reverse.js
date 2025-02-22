const sentence = 'I am learning Web Dev';



let reverse = ''
for (const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

let rev = ''
for(i=0;i<sentence.length;i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}

console.log(rev);

// ShortCut

const reversed = sentence.split('').reverse().join('');
console.log(reversed);