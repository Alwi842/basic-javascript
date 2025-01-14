//math object : metode 2 untuk operasi matematika
let angaAcak = Math.random();
console.log(angaAcak);
console.log(Math.round(Math.random() * 10 +1));

//math.floor untuk membulatkan angka kebawah
console.log("Math Floor :", Math.floor(3.65));

//math.ceil buat membulatkan angka keatas
console.log(`math cell ${Math.ceil(3.46)}`);

//math.round buat membulatkan angka terdekat
console.log(`Math Round : ${Math.round(3.56)}`);

//math.max buat nyari angka tertinggi
console.log(`Math Max : ${Math.max(1,3,4,2,5,6,9,8)}`);

//math.min buat nyari angka terkecil
console.log(`Math min : ${Math.min(1,3,4,2,5,6,9,8)}`);

//Math.sqrt buat hitung akar kuadrat
console.log(`math sqrt ${Math.sqrt(9)}`);

//Math.pow buat menghitung pangkat
console.log(`Math Pow : ${Math.pow(2,3)}`);

//math.PI buat nilai pi
console.log(`Math Pi : ${Math.PI}`);

let luasLingkaran = Math.PI * Math.pow(5,2);
console.log(Math.floor(luasLingkaran));

