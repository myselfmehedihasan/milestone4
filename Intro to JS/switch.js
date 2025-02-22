const dayOfWeek = 3;

switch (dayOfWeek) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4:
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
        break;
}


const lightCondition = false;

switch (lightCondition) {
    case true:
        console.log("It's light");
        break;
    case false:
        console.log("It's dark");
        break;
    default:
        console.log("Your provided input is not valid");
        break;
}



function calcGrading(score) {
    let gradingScore;
    switch (true) {
        case (score <= 100 && score >= 90):
            gradingScore = "A"
            break;
        case (score <= 89 && score >= 70):
            gradingScore = "B"
            break;
        case (score <= 69 && score >= 50):
            gradingScore = "C"
            break;
        case (score <= 49 && score >= 30):
            gradingScore = "D"
            break;
        case (score <= 29 && score >= 0):
            gradingScore = "F"
            break;
        default:
            gradingScore = "Invalid score 😒"
            break;

    }
    return `You got ${ gradingScore } Grade`;
}

const firstPerson = calcGrading(95);
const secondPerson = calcGrading("asfsdf");
const thirdPerson = calcGrading(50);
console.log(firstPerson); 
console.log(secondPerson); 
console.log(thirdPerson); 
