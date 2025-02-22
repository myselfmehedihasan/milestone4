 const mobile ={
    brand : 'apple',
    price:25000,
    color:'black',
    display: 'oled',
    ram: '8gb',
    storage: '256gb',
    camera: '12mp',
    battery: '5000mah',
    processor: 'apple a14 bionic',
    operating_system: 'ios 15',

 }
// for of : array 
// for in : object
 for ( const prop in mobile){
    // console.log(prop)
    // console.log(prop,mobile[prop])
}

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key,mobile[key]);
}