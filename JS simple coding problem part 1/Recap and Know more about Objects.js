const course={
    subject:'Javascript',
    duration:'2 Month',
    credit:1.5,
}

const myArr = ['24']
function courseDetails(obj){
    if(typeof obj === 'object' && !Array.isArray(obj)){
        console.log('valid input')
    }
    else{
        return 'invalid input'
    }
    return `Course name is ${obj?.subject}, course duration is ${obj?.duration}. if you take this course you will earn ${obj?.credit} credit`
}

console.log(courseDetails(course));


// to check array or not

// const myObj = {name: '23'}
// console.log(Array.isArray(myArr))