console.log("===============");
console.log("======Alwi=====");
console.log("===============");

const employee =[
    {
        id:1,
        nama:"Danu",
        age: 25,
        jobDesk: [{title:"frontend", salary: 12000000}],
        hobby: ['membaca', 'menulis']
    },
    {
        id:2,
        nama:"Dani",
        age: 26,
        jobDesk: [{title:"frontend", salary: 2000000}],
        hobby: ['membaca', 'menulis'],
    },
    {
        id:3,
        nama:"Dina",
        age: 27,
        jobDesk: [{title:"backend", salary: 4000000}],
        hobby: ['menulis'],
    },
    {
        id:4,
        nama:"Dani",
        age: 26,
        jobDesk: [{title:"backend", salary: 4000000}],
        hobby: ['menulis'],
    },
    {
        id:5,
        nama:"Deni",
        age: 26,
        jobDesk: [{title:"backend", salary: 3000000}],
        hobby:['membaca'],
    },
    {
        id:6,
        nama:"Dian",
        age: 27,
        jobDesk: [{title:"frontend", salary: 180000000}],
        hobby:['membaca'],
    },
];

console.log("=====Soal 1====");
//Cari kariawan yang memiliki hobi menulis dan usianya diatas 25 tahun find dan includes
let findEmployee = employee.find((data) =>  data.hobby.includes("menulis") && data.age >25);
console.log("Filter : ", findEmployee);
console.log("\n");

console.log("=====Soal 2====");
//Tampilkan data kariawan yang bekerja sebagai backend dan memiliki gaji diatas 3jt pakai filter dan some
let employeeSome = employee.filter((item) =>
 item.jobDesk.some((data)=> data.title.toLowerCase()==='backend' && data.salary > 3000000)
);
console.log("Gaji : ", employeeSome);
console.log("\n");

console.log("=====Soal 3====");
//Tampilkan nama karyawan yang punya satu hobby pake .filter, .map, .length
let employeeHobby = employee.filter((item)=> item.hobby.length===1).map(item => item.nama);
console.log("Nama kariyawan : ", employeeHobby);
console.log("\n");

console.log("=====Soal 4====");
//cari nama kariawan yang pisisinya "frontend" dengan gaji tertinggi, lalu retun nama kariawan pake
// filter some reduce find
let employeeFind=employee.filter(item => item.jobDesk.some((item) => item.title==="frontend"))
.reduce((max, min) => {
    const current=min.jobDesk.find(item => item.title==="frontend").salary;
    const highest=max.jobDesk.find(item => item.title==="frontend").salary;
    return current>highest?min : max;
}).nama;

console.log("Nama kariyawan : ", employeeFind);
console.log("\n");

//math
console.log("=====Soal 5====");
//cari nilai tertinggi dari 3 siswa menggunakan math object
let siswa1 = 49;
let siswa2 = 70;
let siswa3 = 60;

console.log(`Nilai tertinggi : ${Math.max(siswa1, siswa2, siswa3)}`);
console.log("\n");

console.log("=====Soal 7====");
//cari gaji tertinggi dan terendah
let frontendEmployee = employee.filter(data => data.jobDesk.find(sal => sal.title==="frontend"))
let gajiTertinggi = Math.max(...employee.map((data)=> data.jobDesk[0].salary));
let gajiTerrendah = Math.min(...employee.map((data)=> data.jobDesk[0].salary));

console.log(`Nilai tertinggi : ${gajiTertinggi} dan gaji terrendah : ${gajiTerrendah} dengan
selisih ${gajiTertinggi - gajiTerrendah}`);
console.log("\n");

//kombinasi
console.log("=====Soal 8====");
//hitung total gaji semua kariawan setelah dipotong pajak 12% pake reduce dan math floor
let gajiKariawan = Math.floor(employee.map((data)=> data.jobDesk[0].salary)
    .reduce((accumulator, currentValue) => accumulator+=currentValue)/(100-12)*100);
console.log(gajiKariawan);
console.log("\n");

console.log("=====Soal 9====");
//tampilkan semua nama kariawan yang memiliki hobbi terbanyak pake map, max,filter dan length
let hobbiTerbanyak=employee.filter(item2 => item2.hobby.length === Math.max(
    ...employee.map(item => item.hobby.length))).map(item => item.nama);
console.log(hobbiTerbanyak);
