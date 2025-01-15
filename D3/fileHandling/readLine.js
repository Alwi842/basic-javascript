//file untuk input ke terminal;
const r = require("readline");

//buat interface/tampilan input terminal
const inputNama = r.createInterface({
  input: process.stdin, //untuk mengambil input user
  out: process.stdout, // untuk output input user
});
//question untuk menampilkan pertanyaan ke user
// inputNama.question("Masukkan Nama : ", (nama) => {
//   console.log(`Hallo ${nama}`); //tampilkan output
//   inputNama.close(); // menutup input
// });

//contoh 2 input
inputNama.question("Masukkan Nama : ", (nama) => {
  inputNama.question("Masukkan Umur : ", (umur) => {
    console.log(`Hallo ${nama} umur ${umur}`); //tampilkan output
    inputNama.close(); // menutup input
  });
});
