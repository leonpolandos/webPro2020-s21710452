//Destructurin

//Destructuring memecah item pada array atau objek ke dalam variabel yyang berbeda

//1. array

//const colors = ["Merah", "Kuning", "Hijau"];

// let [satu, dua, tiga] = colors;
// console.log(satu, dua, tiga)

// let [satu, tiga] = colors;
// console.log(satu, tiga);

// let [satu, , tiga] = colors;
// console.log(satu, tiga);

// let [satu, dua, tiga] = colors;
// console.log(satu, dua, tiga, empat = "Biru") //menambah array baru

// 2. object
//cara lama
const user = {
    name: "John",
    gender: "Male",
    age : 33,
}
// let name = user.name;
// let gender = user.gender;
// let age = user.age;

//cara baru
// let {name, gender, age, born = "manado"} = user;

// console.log(name, gender, age, born);

// let {name, age} = user;
// console.log(name, age);

// let {name: nama, let: umur}; //jika ingin nama parameter berbeda
// console.log(nama, umur); 

// const display = ({name, age}) => {
//     console.log(`Nama saya ${name} umur saya adalah ${age}`)
// }

// display(user);

//array object

const users = [
    {id: 1, name : "john"},
    {id: 2, name : "bob"},
    {id: 3, name : "jane"},
];

//belum selesai


//kombinasi dengan rest operator

const colors = ["Merah", "Kuning", "Hijau"];
let [satu, ...lainnya] = colors;

console.log(satu);
console.log(lainnya);

