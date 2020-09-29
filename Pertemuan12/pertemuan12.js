// Arrow Function

// const calcAge = (year) => {
//     return 2020 - year;
// }

// Multiple Arguments
// const calcAge = (birthYear, currentYear) => {
//     return currentYear - birthYear;
// };

//No Argument with implicit return value
// const calcAge = () => currentYear - birthYear;


//console.log(calcAge(1999, 2020));

//CONTOH LAIN

// const years = [1990, 1992, 2001, 2005];

//ES5
// const calcAge5 = years.map(function (el){
//     return 2020 - el;
// })
// console.log(calcAge5);

//ES6
// const calcAge6 = years.map((el) => 2020 - el);

// console.log(calcAge6)

//DEFAULT PARAMETER
const calcAge = (birthYear, currentYear = 2020) => currentYear - birthYear;

console.log(calcAge(1999, 2020))
    


