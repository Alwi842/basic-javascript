//data object
const person={
    nama: "Alwi",
    umur: "30",
    job: "fullstack developer",
    alamat: {
        jalan: "Jl. sini no. 123",
        kota: "Tang Sel",
        negara: "indonesia",
    },
    hobi: ["Membaca", "musik", "Olahraga"],
}

//cara mengakses nilai dalam objek menggunakan titik
console.log(`Nama : ${person.nama}`);
console.log(`kota : ${person.alamat.kota}`);
console.log(`Hobi : ${person.hobi[1]}`);

//cara menambah field baru dalam objek
person.isMarried=false;
console.log(person);

//cara menghapus field dalam objeck
delete person.alamat.jalan;
console.log(person);
//cara akses objek menggunakan destructuring assignment
const {nama, umur, job} = person;

console.log(nama);
console.log(umur);
console.log(job);

const test = person.toString();
console.log(test);
