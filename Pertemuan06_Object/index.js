/*
Object
*/

// const mahasiswa = ["John", "Doc", 31, true] //Dalam array

//Mendeklarasikan object

//1. Object
const mhs1 = {
    namaDepan : 'John',
    namaBelakang : 'Doe',
    umur : 31,
    sudahLulus : true,
    alamat : {
        jalan: 'Jln. Arnold Mononutu',
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPSemester: [3.05, 3.25, 3.0, 3.4],

    hitungIPK: function () {
        let total = 0;
        this.IPSemester.forEach(function(el){
            total = total + el;
        });
        this.IPKumulatif= total /4;
    },
};

//2. Kata kunci new
// const mhs2 = new Object();

// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "Smith";

//Mengakses properti objek
//1. Dot notation
//console.log(mhs1.umur);
//2. Bracket notation
//console.log(mhs1["namaBelakang"]);

console.log(mhs1.alamat.jalan);
console.log(mhs1.IPSemester[2]);
mhs1.hitungIPK();
console.log(mhs1)