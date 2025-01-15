// try catch buat error handling
function penjumblahan(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Nilai Tidak valid");
    }
    return a + b;
  } catch (error) {
    console.log(error);
  }
}
console.log("Error", penjumblahan("1", 1));
console.log("Ok :", penjumblahan(2, 1));
