/** di nodejs, ada modu2 yang berfungsiuntuk file handling
 * salah satunya fs(file system) : untuk membuat/baca file
 */

//import modulnya
const fs = require("fs");

//Create : menulis file menggunakan .writeFile("filepath","isi File", "encoding", return)
fs.writeFile(
  "./textFile.txt",
  "Hallo! saya adalah junior programmer",
  "utf-8",
  (error) => {
    if (error) {
      console.log(error);
      return error;
    }
    console.log("data berhasil disimpan");
  }
);

// .appendFile("filepath","isi File", "encoding", return)
let dataDariAPI = "\n yang sedang mencari pekerjaan";
fs.appendFile("./textFile.txt", dataDariAPI, "utf-8", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("data berhasi disimpan");
});

// .readFile("filepath", "encoding", return) : buat baca file

fs.readFile("./textFile.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("Data yang berhasil di baca : ", data);
});

//unlink(path, return), untuk menghapus file secara permanen
fs.unlink("./tmp.txt", (error) => {
  if (error) {
    console.log(error);
    return error;
  }
  console.log("data dihapus");
});
