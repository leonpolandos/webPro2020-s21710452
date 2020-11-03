// Rest and Spread Operator

// const hitung =(a, b, c, d, e, f, g) => {
//     const angka = [a, b, c, d, e, f, g];
//     let total = 0;
//     for(let i =0; i<7; i++){
//         total = total + angka;
//     } 
//     return total;
// };

// rest operator 1
// const hitung = (param1, param2, ...params) => {
//     console.log(param1);
//     console.log(param2);
//     console.log(params);

//     let total = 0;
//     for(let i=0; i < 10; i++){
//         params.forEach((el) => {
//             total = total + el;

//         });
//         return total;
//     }
// };

// console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8));

//spread operator

//1. Duplikasi array
// const angka = [1,2,3,4,5];
// const angka2 = [...angka];

// angka[0] = 10;

// console.log(angka);
// console.log(angka2);

// console.log(angka);
// console.log(...angka);

//2. Menggabungkan array
const angka1 = [1, 2, 3, 4, 5];
const angka2 = [ 6, 7, 8, 9, 10];
const angka3 = [11, 12];

const gabung5 = angka1.concat(angka2, angka3);
console.log(gabung5);

const gabung6 = [...angka1, ...angka2, 11, ...angka3];
console.log(gabung6);

//menambah properti pada objek
const orang = {
    nama: "John",
    umur: 33,
};

orang = {...orang, pekerjaan: "Guru"};
console.log(orang)

