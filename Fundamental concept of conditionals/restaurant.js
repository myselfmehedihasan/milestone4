const age = 60;
const price = 500;

if (age <= 12){
    console.log("You can eat for free!");
}

else if (age >= 60){
    //50% discount
    const discountedPrice = price * 50/100;
    const payAmount = price - discountedPrice;
    console.log("you get" +" "+ discountedPrice+" Tk discount" +" "+ "Your payable amount now"+" "  + payAmount);
}

else if (age >=50){
    //25% discount
    const discountedPrice = price * 25/100;
    
    const payAmount = price - discountedPrice;
    console.log("you get" +" "+ discountedPrice+" Tk discount" +" "+ "Your payable amount now"+" "  + payAmount);
}

else if (age >= 40){
    //10% discount
    const discountedPrice = price * 10/100;
    const payAmount = price - discountedPrice;
    console.log("you get" +" "+ discountedPrice+" Tk discount" +" "+ "Your payable amount now"+" "  + payAmount);
}

else{
    console.log(price);
}