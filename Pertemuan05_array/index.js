/*

/*INITIALIZE NEW ARRAY */
let notes = ["Notes1" , "Notes2", "Notes3", "Notes4", "Notes5"];

console.log(notes);

/*HOW TO ACCESS SINGLE ELEMENTIN ARRAY*/
console.log(notes[0]);
console.log(notes[1]);
console.log(notes[3]);
console.log(notes[4]);
  /*Menampilakn banyaknya array*/
console.log("Banyaknya array adalah " + notes.length);

/*Deklarasi array menggunakan new */
let buah2 = new Array("Salak", "Jambu", "Apel");
console.log(buah2);


/* Memnipulasi Array */
//1. Menambah isi array.
let mhs = [];
mhs[0] = "Jon";
mhs[1] = "Leonard";
mhs[2] = "Petter";

console.log(mhs);
//2. Mengubah isi aray
mhs[1] = "Polandos";
console.log(mhs);

//3.Menghapus isi array
mhs[1] = undefined;
console.log(mhs)


/* Menampilkan array dengan looping */
for(let i = 0; i < 4; i++){
    console.log("Mahasiswa ke-" + (i+1) + " Adalah " + mhs) //Masih harus diperbaiki
}

//Diferrent data type
var john = ["John", "Smith", 1990, "Designer", false];

john.push("Jonithan"); //push element array ke terakhir.
john.unshift("Mr."); // push element array ke depan.
console.log(john)

john.pop(); //Menghapus element paling belakang array
john.shift(); // menghapus element paling depan array

//concat array
let buah = ["Mangga", "Apel", "Jeruk"];
let sayur = ["Kangkung", "Sawi", "Corn"];

let makanan = buah.concat(sayur)
console.log(makanan);

//Materi lain di classroom

