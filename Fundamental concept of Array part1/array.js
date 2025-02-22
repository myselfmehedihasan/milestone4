// includes, push, pop, shift, unshift, length, index,indexOf,isArray,slice,splice


// Array

const numbers = [12, 22, 32, 42,55,58,96,7556,456,65];

// console.log(numbers.length);

// console.log(numbers[0]);

numbers.push(52);
// console.log(numbers);

// numbers.pop();
// const out1 = numbers.pop();
// const out2 = numbers.pop();

// console.log(numbers);
 
// console.log(out1, out2);


// shift-unshift
 numbers.shift();
    // console.log(numbers);
    numbers.unshift(100);
    console.log(numbers);
    

// console.log(numbers.includes(100));


if (numbers.includes(100)) {
    console.log('100 is here');
} else {
    console.log('100 is not here');
}
