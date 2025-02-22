/***
 * TERNARY --> three parts
 * 
 * 
 *      ? :
 * 
 * condition ? do something if true : do something if false
 * 
 */
// simple ternary
    const age = 18;
age >= 18 ? console.log('Vote dio') : console.log('Go to sleep');

/*let price = 500;
const isLeader = false;
price = isLeader === true ? 0 :console.log(price + 100) ;
*/
// nested ternary
let price = 500;
const isLeader = true;
if(isLeader === true){
    if(price > 1000) {
        price = price/2;
    } 
    else{
        price = 0;
    }  
}
else{
    price = price + 100;
}

console.log(price);

;


// ternary with function

price = isLeader === true ? price > 1000 ? price/2 : 0 : price + 100;