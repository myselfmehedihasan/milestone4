const nums = [23,43,2,5,346,203,2];

let sumOfOdd = 0;
let sumOfEven = 0;


for(i=0;i<nums.length;i++){
    const x = nums[i];

    if(x%2===1){
        sumOfOdd += x;
    }
    else{
        sumOfEven += x;
    }

}

console.log(sumOfEven);
console.log(sumOfOdd);