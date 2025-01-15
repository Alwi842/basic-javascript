//PROMISE : objek yang mewakili hasil dari operasi async
function getDataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 2, 3, 4, 5];
    if (!data) reject("error");
    resolve(data);
  });
}

// console.log(getDataFromServer());

//error handling untuk menangani hasil promise terpenuhi / data berhasil diambil
//fungsi result function dieksekusi dengan nilai yang di kasih dari resolve ketia promise berhasil
getDataFromServer()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    //tampil data ketika error
    console.log(err);
  });

console.log("=====parallel promise=====");
const getFirstData = () => {
  return new Promise((resolve, reject) => {
    let data = "data Ke 1";
    if (!data) reject("error");
    resolve(data);
  });
};

function getSecondData() {
  return new Promise((resolve, reject) => {
    let data = "data ke 2";
    if (!data) reject("error");
    resolve(data);
  });
}

//jika salah satu error maka semua error
function getAllData() {
  return Promise.all([getFirstData(), getSecondData()]);
}

getAllData()
  .then((result) => {
    console.log("all data", result); //jika semua data berhasil dipanggil
  })
  .catch((err) => {
    console.log(err);
  });
