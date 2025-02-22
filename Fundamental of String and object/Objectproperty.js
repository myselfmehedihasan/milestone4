const person ={
    name: 'John',
    age: 30,
    occupation: 'Software Engineer',
    salary:25000,
    married:true,
}

console.log(person);

// dot notation
// dot symbole diye object er property er value access kora
console.log(person.name);
console.log(person.occupation);
const income = person.salary;
console.log(income);

// Bracket Notation
// bracket symbole diye object er property er value access kora
console.log(person['age'])
const boyos = person['age']
console.log(boyos);

const keyName = 'occupation'
console.log(person[keyName]);