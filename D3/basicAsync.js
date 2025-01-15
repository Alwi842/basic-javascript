/**secara default bahasa pemerograman secara default dieksekusi secara berurut (synchronus)
* Asyncrounous : teknik eksekusi kode secara parallel tanpa harus menunggu eksekusi program lain selesai
* artinya fungsi yang dibuat menggunakan teknik asynchronous akan dijalankan bersamaan dengan kode lainnya
*/
//setTimeout : 
console.log('Pertama');

setTimeout(() => {
    console.log('kedua')
}, 3000);
console.log('Ketiga');
setTimeout(() => {
    console.log('lop u')
}, 3000);