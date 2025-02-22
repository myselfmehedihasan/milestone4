// slice (kon index theke suru , kon index er ag porjonto)
var numbers = [10,20,30,40,50,40];
console.log(numbers)
console.log(numbers.slice(1,4))
console.log(numbers.slice(3))

// splice method

// splice(start,deleteCount,element1.element2)
var numbers2 = [10,20,30,40,50,60,70];
// console.log(numbers2);
// numbers2.splice(2,1);

// numbers2.splice(2,1,100,200);
numbers2.splice(2,0,200,600);
console.log(numbers2);