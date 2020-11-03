/* Test 2 */

// Nomor 1

/*ES6 jawaban */
let calculateAge6 = (birthYear) => {
    2019 - birthYear;
}

const yearUntilRetirement = (Object) => {
    let age = calculateAge6(Object.year);
    let retirement = 65 - age;

    if(retirement > 0){
        console.log(`${Object.firstName} retires in ${retirement} years`)
    } else {
        console.log(`${Object.firstName} is already retired`)
    }
}

yearUntilRetirement({year: 1987, firstName: 'John'});

// Nomor 2

const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let numb = numbers.map(numbers => numbers)
    console.log(numb);
}

console.log(addNumber(1,2,3,4,5,6,7));

// Nomor 3
 
const calculateArea = (obj) => {
    let phi = 3.14;
    let power = 2;
    let radius = 0;
    phi * Math.pow(radius, power);
};
 
radius = 21;
let area21 = calculateArea({radius: radius, power: 2 });
 
radius = 7;
let area7 = calculateArea({radius: radius, power: 2 });
 
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// Nomor 4
const makeAjaxRequest = (url = 'www.google.com', method) => {
    method = 'GET'
    console.log(url, method)
}    

makeAjaxRequest('www.google.com')







