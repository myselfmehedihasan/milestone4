const x = "Helllo World";
const y = "hello";

// console.log(x.includes(y));
console.log(x.toLowerCase().includes(y.toLowerCase()));

const c = "helLo";
const d = " hello ";

if (x.trim().toLowerCase() === y.trim().toLowerCase()){
    console.log("both are same");
}
else{   
    console.log("both are not same");
    }