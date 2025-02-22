const school = 'Raj UK Uttara Model School'
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';

if (subject.toLowerCase() === book.toLowerCase()){
    console.log('You have the book of the subject');
}
else{
    console.log('You do not have the book of the subject');
}

const drink = 'water';
const liquid = '      water';

if (drink.trim() === liquid.trim()){
    console.log('The drink and liquid are the same');
}
else{
    console.log('The drink and liquid are not the same');
}

