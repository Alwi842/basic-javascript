// CALLBACK : fungsi yang dikirim sebagai argumen/parameter ke fungsi laen
// Atau fungsi yang memanggil fungsi laen

function printLog(data){
    console.log("Callback : ", data);
}

const penjumblahan = (a, b) => {
    return a+b;
}

printLog(penjumblahan(1,2))