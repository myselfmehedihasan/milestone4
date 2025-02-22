const person ={
    name: 'John',
    age: 30,
    occupation: 'Software Engineer',
    salary:25000,
    married:true,
    'fav place': ['bandorban','saintmartin','kuakata']
}

person.salary = 30000; 
person['age'] = 32;

const propName = 'occupation'
person[propName] = 'devops'

console.log(person);