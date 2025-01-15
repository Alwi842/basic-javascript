//init
const fs = require("fs");

function readJsonFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const jsonData = JSON.parse(fileContent);
  return jsonData;
}
const employee = readJsonFile("./employee.json");
/**SOAL 1
 * buat perintah untuk file JSON bernama employee.json
 * yang berisi data json dan tampilkan semua nama nama kariawan
 * readfile
 */

let namaEmployee = employee.map((data) => data.nama);
console.log("nama Employee : ", namaEmployee);

/**SOAL 2
 * Buat perintah untuk nambahin minimal 1 data JSON kedalam file bernama employee2.json
 * pake readfile & replace pake writefile
 */
function addEmployee(original, newEmployee) {
  let extra = [...original, newEmployee];
  return extra;
}
let newEmployee = {
  id: 7,
  nama: "bambang",
  age: 30,
  jobDesk: [
    {
      title: "backend",
      salary: 5000000,
    },
  ],
};
let newEmployeeData = addEmployee(employee, newEmployee);
fs.writeFile(
  "./newEmployee.json",
  JSON.stringify(newEmployeeData, null, 2),
  "utf-8",
  (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("data berhasil disimpan di newEmployee.json");
  }
);

/** SOAL 3
 * Buat perintah untuk nyari kariyawan yang usianya diatas atau sama dengan 26
 * dan simpan datanya ke dalam file baru bernama karyawan_tuwir.json
 * readfile&writefile
 */
function employeeAgeFilter(employee, age) {
  return employee.filter((data) => data.age > age);
}
let employeeAge = employeeAgeFilter(employee, 26);
fs.writeFile(
  "./karyawan_tuwir.json",
  JSON.stringify(employeeAge, null, 2),
  "utf-8",
  (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("data berhasil disimpan di karyawan_tuwir.json");
  }
);
/**Soal 4
 * buat perintah untuk menghapus karyawan dengan id=1 dari data employee.json
 * lalu simpan perubahan datanya di file baru bernama deleted_data.json
 * readfile dan writefile
 */
let removedEmployee = employee.filter((data) => data.id !== 1);
fs.writeFile(
  "./deleted_data.json",
  JSON.stringify(removedEmployee, null, 2),
  "utf-8",
  (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("data berhasil disimpan di deleted_data.json");
  }
);
