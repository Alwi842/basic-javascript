console.log("===============");
console.log("======Alwi=====");
console.log("===============");
//soal 1
console.log("=====Soal 1====")
let a=10;
let b=7;
let c=11;
console.log("X = ", a);
console.log("Y = ",b);
console.log("Z = ",c);
let penjumblahan=a+b+c;
let pengurangan=a-b-c;
let pembagian=a/b/c;
let perkalian=a*b*c;
let mod=a%b%c;
let kaliBagi=perkalian+pembagian;
let total=penjumblahan+pengurangan+pembagian+perkalian+mod+kaliBagi;
console.log(`Penjumblahan = ${penjumblahan}`);
console.log(`Pengurangan = ${pengurangan}`);
console.log(`Pembagian = ${perkalian}`);
console.log(`Perkalian = ${pembagian}`);
console.log(`Modulus = ${mod}`);
console.log(`Perkalian tambah pembagian = ${kaliBagi}`);
console.log(`Total = ${total}`);
console.log("\n");

//soal 2:
//htung berapa detik dalam 30 hari"
console.log("=====Soal 2====");
let jam=30*24;
let menit=jam*60;
let detik=menit*60;
console.log(`Dalam 30 hari ada ${jam} jam atau ${menit} Menit atau ${detik} detik`);
console.log("\n");

//soal 3 : 
//Cari hobi.
console.log("=====Soal 3====");
function findUserHobby(user){
    let hobby=user&&user.hobby || "Tidak ada";
    let hasil=user&&user.nama && (`hobbi dari ${user.nama} adalah ${hobby}` );
    return hasil || "User tidak ada";
}

let user1={
    nama:"oui kui",
    age:25,
    hobby:["membaca", "menulis"]
};
let user2={
    nama:"Mega chan",
    age:25
}
let user3=undefined;
console.log(findUserHobby(user1));
console.log(findUserHobby(user2));
console.log(findUserHobby(user3));
console.log("\n");

//soal 4 : 
/*Buat logic switch case untuk menampilkan nama hari pake bahasa inggris berdasarkan input angka 1-7. 
Jika angka yang dimasukan dari rentang tersebut, maka tampilkan input tidak valid*/
console.log("=====Soal 4====");
let hari=1;
switch (hari) {
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    }
    case 3: {
        console.log("Wednesday");
        break;
    }
    case 4: {
        console.log("Thursday");
        break;
    }
    case 5: {
        console.log("Friday");
        break;
    }
    case 6: {
        console.log("Saturday");
        break;
    }
    case 7: {
        console.log("Sunday");
        break;
    }

    default: {
        console.log("invalid input");
        break;
    }
}
console.log("\n");
/* soal 5 :
buat logic if yang menentukan status kelulusan orang berdasarkan nilai yang didapat
Jika nilai lebih sama dengan 80, anda lulus dengan nilai sangat baik
Jika nilai lebih dari sama dengan 70, anda lulus
Jika nilai lebih dari sama dengan 60 dan kurang dari 70 maka lulus
Jika kurang dari 60 statusnya tidak lulus*/
console.log("=====Soal 5====");
let nilai=80;
if(nilai>=80) console.log("anda lulus dengan nilai sangat baik");
else if (nilai >= 70) console.log("anda lulus dengan baik");
else if (nilai >=60 && nilai <70) console.log("lulus");
else if (nilai <60) console.log("Tidak lulus");
console.log("\n");

//soal 6 : 
/*buat logic untuk menentukan nilai rata ratadari 3 mapel (mtk, fisika, kimia)
Jika nilai yang dimasukan tidak falid, diluar 0-100, makastatusnya 'nilai tidak valid'
Jika nilai rata-rata lebih besar atau sama dengan 80, maka statusnya 'selamat anda lulus dengan baik
Jika nilai rata-rata lebih kecil dari 80 dan lebih besar atau sama dengan 60, 'anda lulus
Jika kurang dari 60 statusnya tidak lulus");*/
console.log("=====Soal 6====");
let fisika=50, kimia= 80, mtk=70;
let avg=(fisika+kimia+mtk)/3;
if (avg<=0 || avg>=100) {
    console.log(`nilai tidak valid (${avg})`);
} else if (avg>=80){
    console.log('selamat anda lulus dengan baik');
} else if (avg<80 && avg>=60) {
    console.log("anda lulus");
} else if (afg<60) {
    console.log("anda tidak lulus");
}
console.log("\n");

//soal 7 : 
/*buat logic untuk menentukan jenis bilangan (positif negatif atau nol)
dari nilai input oleh user yang ditentukan menggunakan termetry operator
Output yang diharapkan ('angka 7 adalah bilangan positif')");*/
console.log("=====Soal 7====");
let input=10;
let result= input>0 ? `angka ${input} adalah bilangan positif` : input <0 ? 
    `angka ${input} adalah bilangan negatif` : input===0 ? "angka adalah nol" : "input invalid";
console.log(result);
console.log("\n");

/*
//soal 8 : 
Buat program untuk menghitung total harga pembelian barang menggunakan nested if:
- Jika total harga = 0, maka tampilkan pesan 'harga tidak valid'.
- Jika pembelian melebihi 1jt, maka berikan diskon 10%.
- Jika pembelian melebihi 500rb, maka berikan diskon 5%.
- Jika pembelian di bawah 500rb, tidak ada diskon.

Tampilkan pesan berikut:
- Anda membeli <jumlahbarang>, <namabarang>, dengan harga <hargabarang> per <namabarang>.
- Total harga sebelum diskon = <total>. Lalu cek jika dapat diskon:
  - Jika dapat diskon, tampilkan 'selamat anda mendapatkan diskon sebesar <diskon>', harga setelah diskon = <hargasetelahdiskon>.
  - Jika tidak dapat diskon, tampilkan 'anda tidak dapat diskon', harga total = <hargasetelahdiskon>.
*/
console.log("=====Soal 8====");

let namaBarang="pisang";
let hargaBarang=10000;
let jumlahBarang=200;
total=hargaBarang*jumlahBarang;
//hitung diskon
if (total===0) {
    result="harga tidak valid";
    console.log(result);
} else {
    result=`Anda membeli ${jumlahBarang} ${namaBarang} dengan harga Rp.${hargaBarang}`+
    ` per-${namaBarang}\nTotal harga sebelum diskon = Rp. ${total}`;
    let discount;
    if (total>1000000) {
        discount=10;
    } else if (total>500000) {
        discount=5;
    } else if (total<500000) {
        discount=0;
    }

    let hargaSetelahDiskon=total*(100-discount)/100;
    if (discount>0){
        result+=`\nSelamat! anda mendapatkan diskon sebesar ${discount}%\nHarga setelah diskon = Rp. `+
        `${hargaSetelahDiskon}`;
    } else {
        result+=`\nAnda tidak dapat diskon\nHarga setelah diskon = Rp. ${hargaSetelahDiskon}`;
    }
    console.log(result);
    
}
console.log("\n");
/*soal 9 : for loop
buat program untuk mencari bilangan prima dari 1-25 menggunakan for loop
*/
console.log("=====Soal 9====");

let max=25;
for(let i=1;i<=max;i++){
    let isPrime=true;
    for(let j=2; j<i;j++) {
        if (i%j===0){
            isPrime=false;
            break;
        }
    }
    if (isPrime){
        console.log(i);
    }
}
console.log("\n");
/* Soal 10 : for loop
Buat looping untuk menghasilkan nilai rata-rata dari sebuah array bilangan nilai bulat menggunakan function
*/
console.log("=====Soal 10====");
function arrAvg(arr){
    let total=0;
    let indexTotal=0;
    for(let i of arr) {
        indexTotal++;
        total+=i;
    }
    let avg=total/indexTotal;
    return avg;
}
const dataBilanganBulat=[2,4,6,8,10];
console.log(arrAvg(dataBilanganBulat));
console.log("\n");
/*
soal 11 : for loop
buat sebuah function untuk menghitung jumlah huruf kapital pada sebuah string
*/
console.log("=====Soal 11====");

function checkStrUppercase(str){
    let total=0;
    for(let i=0;i<str.length;i++){
        if (str[i]>="A" && str[i]<="Z") total++;
    }
    return total;
}
let string1 = "Hello World";
let string2 = "Kiw, Gimana Kabarnya";
let string3 = "JAVaScRipT";
console.log(checkStrUppercase(string1));
console.log(checkStrUppercase(string2));
console.log(checkStrUppercase(string3));
console.log("\n");
/*
soal 12 : for loop
buat fungsi untuk mencari nilai tertinggi dari sebuah array
*/
console.log("=====Soal 12====");

function findHighestNumber(arr){
    let highest=0;
    for(let i of arr) {
        if (i>highest) highest=i;
    }
    return(`Nilai tertinggi pada array tersebut adalah ${highest}`)
}

const nilaiTertinggi=[1,30,26,54,6567,96576,23,453];
console.log(findHighestNumber(nilaiTertinggi));
console.log("\n");

/*
soal 13 : for
buat fungsi untuk membuat segitiga sama kaki yang terbuat dari bintang "*" dengan jumlah baris yang bisa
ditentukan oleh user melalu parameter fungsi
*/
console.log("=====Soal 13====");
function segitigaSamaKaki(length){
    let result="";
    for (let i = 1; i <= length; i++) {
        for (let j = 0; j < length - i; j++)
            result+= " ";
    
        // i elements
        for (let j = 1; j <= i; j++)
            result+= "* ";
        result+="\n";
    }
    return result;
}

console.log(segitigaSamaKaki(10));