const college ={
    name: 'NDC',
    location: 'Accra',
    courses: ['Maths', 'Science', 'English'],
    isPrivate: false,
    unique:{
        color : 'blue',
        size : 100,
        result:{
            pass : 90,
            fail : 10

        }
    }
}
// console.log(college.unique.color);
console.log(college.unique.result.pass);
college.unique.result.pass = 100;
console.log(college.unique.result.pass);
college.courses[1]='Spanish'
console.log(college.courses);
delete college.location;
console.log(college)