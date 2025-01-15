//fungsi biasa
function getDataFromServer() {
  //promise : sebuah objek yang mewakili hasil dari operasi asyncronous
  return new Promise((resolve, reject) => {
    let data; //{id:1,nama:"alwi",job:"fullstack",};
    if (data) {
      resolve(data); //buat ngembaliin data yang berhasil di tangkep
    } else {
      reject("Data gk ada"); //buat ngembaliin error jika data gagal diambil
    }
  });
}
// console.log(getDataFromServer());

//async
async function fetchData() {
  // blok trycatch : error handlinguntuk menangani error jika data gagal diambil
  try {
    const getData = await getDataFromServer();
    console.log("Data Yang diterima : ", getData);
  } catch (error) {
    console.log("Terjadi kesalahan pada saat pengambilan data reason :", error);
  }
}

// fetchData()

//contoh lain
async function fetchUserData(userId) {
  try {
    console.log("lagi ngambil dari api.");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    // error handling untuk cek status 200 suksess + gk sukses menggunakan throw
    if (!response.ok || response.status !== 200) {
      //cek apakahstatusnya ok / 200. bisa menggunakan salah satu kondisi
      throw new Error(
        `HTTP error status : ${response.status} ${response.statusText}`
      );
    }
    const user = await response.json();

    console.log("Data user by id : ", user);
  } catch (error) {
    console.log("Error : ", error);
  }
}
fetchUserData(11);
