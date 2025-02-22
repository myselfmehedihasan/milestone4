// Reverse An Array
/*
const arr =['Apple','Banana','Coconut','Grap','Mango']

for (let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}
*/
//sum of array elements
/*
const nums = [10,20,30,40,50];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    sum += currentNumber;
    console.log('Sum:', sum );
}
*/

//swap array elements
/*
const nums2 = [10,20,30,40,50];
let temp = nums2[3];
nums2[3] = nums2[1];
nums2[1] = temp;
console.log(nums2);
*/
//find array elements
/*
const fruits =['Apple','Banana','Coconut','Grap','Mango']
const target = "Grape";
let foundIndex = -1;
 for (i=0;i< fruits.length; i++){
    currentFruit = fruits[i];
    if (currentFruit == target);
    foundIndex = i;
 }

 if (foundIndex > -1){
    console.log(foundIndex,"Founded");
 }
 else{
    console.log("Not Found");
 }
*/

//find max/min number
/*
const nums3 = [45,3,33,200,30,50];
let maxNum = nums3[0];
let minNum = nums3[0];

for (let i = 0; i < nums3.length; i++) {
    const currentNum = nums3[i];    
    if(maxNum < currentNum){
        maxNum = currentNum;
    }
    if(minNum > currentNum){
        minNum = currentNum;
    }
}

console.log (minNum,maxNum)
*/


//filter an array
/*
const purchaseHistory = [ 100,300,500,150,150];
//Using Loop
const filteredParchaseHistory = [];

for (let i = 0; i < purchaseHistory.length; i++) {
    const currentPurchase = purchaseHistory[i];
    if (currentPurchase <= 200) {
        filteredParchaseHistory.push(currentPurchase);
    }
}


//Using.filter()

const filteredParchaseHistory2 = purchaseHistory.filter(function (currentPurchase){
    return currentPurchase <= 200;
});
// console.log(filteredParchaseHistory2);

console.log(filteredParchaseHistory);
*/


//discout 
/*
const discountedPrice = [];

for (let i = 0; i < purchaseHistory.length; i++) {
    const currentPurchase = purchaseHistory[i];
    if (currentPurchase > 200) {
        const calculatedDiscount = currentPurchase - currentPurchase * 10/100;
        discountedPrice.push(calculatedDiscount);
    }
    else{
        discountedPrice.push(currentPurchase);
    }
}

console.log(discountedPrice);

//Using.map()
const discountedPrice2 = purchaseHistory.map(function (currentPurchase){
    if (currentPurchase > 200) {
        const calculatedDiscount = currentPurchase - currentPurchase * 10/100;
        return calculatedDiscount;
    }
    else{
        return currentPurchase
    }
})

console.log(discountedPrice2);
*/

//Frequency Array

const frequencyArray  = [0,0,0,0,0,0,0,0,0,0,]
const sampleNumber = '9223843002357834322';
for(let i = 0;i<sampleNumber.length;i++){
    const currentDigit = sampleNumber[i];
    // frequencyArray[currentDigit] = frequencyArray[currentDigit] +1 ;
    frequencyArray[currentDigit]++
}
console.log(frequencyArray);

//Findout Maximum occurance
let maxOccurance = frequencyArray[0];
let maxOccuranceIndex = 0;
for(let i = 0;i<frequencyArray.length;i++){
    const currentOccurance = frequencyArray[i];
    if(currentOccurance > maxOccurance){
        maxOccurance = currentOccurance;
        maxOccuranceIndex = i;
        }
}
console.log(maxOccurance , maxOccuranceIndex);


//Serial Change
const serial = [22,33,44,55,66,77,88];
const target = 55; 
while(true){
    const firstElement = serial[0];
    if(firstElement == target){

        break;
    }
    const extractedElement = serial.shift();
    serial.push(extractedElement);

 }

 console.log(serial);