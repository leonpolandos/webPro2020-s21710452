/* Arrow function */

//No parameter
//ES5
// var show5 = function() {
//     return 'My name is John';
// }

// //ES6

// const show6 = () => `My name is john`;
// console.log(show6());

// One parameter
//ES5
// var show5 = function(firstName){
//     return `My name is ${firstName}`;
// }

// //ES6
// const show6 = (firstName) => `My name is ${firstName}`;
// console.log(show6(`Jendo`));

//TWO OR MORE PARAMETERS
//ES5
// var show5 = function(firstName, lastName){
//     return `My name is ${firstName} ${lastName}`;
// }

// //ES6
// const show6 = (firstName, lastName) => `My name is ${firstName} ${lastName}`;
// console.log(show6(`Leonard`, `Polandos`));





/*Excercise */
//conver to ES6 Syntax

// function yearUntilRetirement5 (year, firstName) {
//     var age = 28;
//     var retirement = 65 - age;
//     if (retirement > 0){
//         console.log(firstName + " retired in " + retirement + " years ");
//     }
//     else {
//         console.log(firstName + " is already retire ")
//     }
// }

/* ES6 */

const yearUntilRetirement6 = (year , firstName) => {
    let age = 21
    let retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retired in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retire`);
    }
}

yearUntilRetirement6(2020, "Leonard")