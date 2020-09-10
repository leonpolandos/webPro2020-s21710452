/*
    1. Conditional
*/

// 1. else if
let nilaiMahasiswa1 = 20;
let syaratLulus = 60;
let lulus = true;

if (nilaiMahasiswa1 <= 100 && nilaiMahasiswa1 >= 90){
    console.log("A");
}
else if (nilaiMahasiswa1 <= 89 && nilaiMahasiswa1 >= 80){
    console.log("A-")
}
else if (nilaiMahasiswa1 <= 79 && nilaiMahasiswa1 >= 70){
    console.log("B")
}
else if (nilaiMahasiswa1 <= 69 && nilaiMahasiswa1 >= 60){
    console.log("B-")
}
else if (nilaiMahasiswa1 <= 59 && nilaiMahasiswa1 >= 50){
    console.log("C")
}
else if (nilaiMahasiswa1 <= syaratLulus){
    console.log("Anda Tidak Lulus");
}

console.log("Saya Mendapatkan Nilai " + nilaiMahasiswa1 + "." )

// 2. switch case

let toDos;
let hari = "Senin";

switch (hari) {
    case "Senin" :
        toDos = "Olahraga Pagi Dan Sore"
        break;
    case "Selasa" :
    case "Rabu" :
        toDos = "Istirahat jangan berolahraga"
        break;
    case "Kamis" :
        toDos = "Olaharaga Pagi dan malam"
        break;
    case "Jumat" : 
        toDos = "Olahraga Pagi saja"
        break;
    case "Sabtu" : 
        toDos = "Beribadah Sabath"
        break;
    case "Minggu" : 
        toDos = "Santai"
        break;
    default :
        toDos = "Kosong";
}

console.log(toDos);

/*
    2. Looping
*/

// 1. for loop
let Mahasiswa;

for (i = 0 ; i<10; i++)
{
    console.log("Mahasiswa ke-" + (i+1));
}

// 2. for/in loop

const buku = {
    Judul : "Mr.Bean",
    createdBy : "Rowan Atkinson",
    Tahun : 2002
};

for (x in buku){
    console.log(x, ':', buku[x]);
}

// 3. For/of loop

const bukuu = [
    "Game of Thrones: A Song of Ice and Fire",  
    "Harry Potter and The Philosopher's Stone", 
    "Lord of The Rings: The Fellowship of The Ring"
]

for (x of bukuu) {
    console.log(x);
  }

// 4. While loop

let y = 1;

while (y <= 10) {
  console.log(y);
  y++;
}

console.log(y)
  