//declare array
let myArray=[1,2,3,4,5];

//akses data array berdasarkan index

let arrayPertama= myArray[0];
let arrKedua = myArray[1];

console.log(`array pertama adalah ${arrayPertama}`);
console.log(`array pertama adalah ${arrKedua}`);

//mengubah arr berdasarkan index.

myArray[2]=6;
console.log(`array 3 telah diubah menjadi ${myArray[2]}`);

//array method
//.push : method array untuk menambahkan data ke baris akhir array;
myArray.push(7);
console.log(`push : ${myArray}`);

//.shift : metode array untuk menghapus data dari pertama
myArray.shift();
console.log(`shift : ${myArray}`);

//.unshift : metode array untuk menambah data ke awal array
myArray.unshift(1,2);
console.log(`unshift : ${myArray}`);

//.pop : metod array untuk menghapus data terahir dari array
let nilaiTerakhir = myArray.pop();
console.log(`Pop : ${nilaiTerakhir}`);
console.log(`popped array : ${myArray}`);

//.splice metod array untuk menyisipkan data kedalam array
myArray.splice(2, 0, 3);
console.log(`Splice : ${myArray}`);

//.slice method array untuk memotong dalam array
let slice = myArray.slice(1,3);
console.log(`Slice : ${slice}`);

//.sort : metode array untuk mengurutkan (ascending) dalam array
myArray.sort();
console.log(`Sort : ${myArray}`);

//.reverse : method array untuk mengurutkan (descending) dalam array
myArray.reverse();
console.log(`Reverse : ${myArray}`);

//.indexOf : metode array untuk nyari index dalam array
let nilaiCari=3;
let hasilCari = myArray.indexOf(nilaiCari);
if (hasilCari === nilaiCari) 
    console.log(`mencari ${nilaiCari}, hasilnya ${hasilCari}`);
else 
    console.log("Nilai tidak dapat ditemukan");

//.concat : method array untuk menggabungkan 2 array
let arrayLain = [7,8,9];
let gabungArray = myArray.concat(arrayLain);
console.log(`concat : ${gabungArray}`);

//foreach : metode array untuk melakukan iterasi pada array
myArray.forEach(i => {
    console.log(`forEach : ${i}`);
});

//toString : metode array untuk mengubah data array menjadi string
console.log(`toString ${myArray.toString()}`);

//.toLocaleString : metode array untuk mengubah array menjadi string dengan formlat lokal
const price = [1000, 2000, 3000, 4000];
const arrToLocaleString = price.toLocaleString({
    style: "currency",
    currency: "IDR"
})
console.log(`toLocaleString : ${arrToLocaleString}`);

//reduce : metode array untuk mengakumulasi nilai array ke dalam satu hasil akhir(mentotalkan data array)
const sum = myArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);
console.log(`reduce : ${sum}`);

const dataSiswa = [
    {
        id:1,
        name: "danu",
        age: 25,
        hobby: ["membaca", "menulis"]
    },
    {
        id:2,
        name: "dani",
        age: 24,
        hobby: ["membaca", "menulis"]
    },
    {
        id:3,
        name: "alwi",
        age: 23,
        hobby: ["menggambar", "menulis"]
    },
    {
        id:4,
        name: "dina",
        age: 26,
        hobby: ["membaca", "menangis"]
    }
];

//contoh lain foreach
const forEachDataSiswa = dataSiswa.forEach((data) => {
    console.log(`forEach dataSiswa : ${data.name} ${data.age<=25}`); 
});

//mapping
const getNameFromDataSiswa = dataSiswa.map((item) =>{
    return {name: item.name, age: item.age};
});
console.log(`mapping data nama : ${getNameFromDataSiswa}`)

//filter : metode array untuk memfilter data berdasarkan kondisi tertentu
const filterDataSiswa = dataSiswa.filter((item) => {
    return item.hobby.find((data)=> data === 'membaca');
});
console.log(`Filter : ${filterDataSiswa}`);

//find : metode array untuk mencari data dalam array
const findDataSiswa = dataSiswa.find((data) => {
    return data.name ==="dina";
});
console.log(`Find : ${findDataSiswa}`);

//.length : metode array untuk menghitung panjangnya array
console.log(`length : ${myArray.length}`);

//.every : method array untuk mengecek apakah semua elemen dalam array memenuhi suatu kriteria
const everyDataSiswa = dataSiswa.every((item) => {
    return item.age === 25;
})
console.log(`Every : ${everyDataSiswa}`)

