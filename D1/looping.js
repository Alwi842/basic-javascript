//loop : pengulangan yang bertujuan untuk memeriksa kondisi tertentu
//while loop
let cond=1;
while(cond<5){
    console.log(`while loop ke-${cond}`);
    cond++;
}

//for loop
cond=5
for(let i=1; i<cond;i++) {
    console.log(`for loop ke-${i}`);
}

let arr =[1,2,3,4,5];
for(let i of arr){
    console.log(`Loop ke-${i}`);
}

//contoh lain
let hitung=0;
let i=0;
while(i<arr.length){
    if(arr[i]>3){
        hitung++;
    }
    i++;
}
console.log(`Jumlah elemen yang lebih dari 3 : ${hitung}`);

//iterate through object
let user = {
    nama: "alwi",
    umur: 25,
    negara: "indonesia"
}
for(let key in user){
    console.log(`${key} = ${user[key]}`);
}

//contoh untuk bilangan prima
let n=20;
let prima = 2;
while (prima <= n) {
    let isPrime=true;
    let j = 2;
    while (j<prima) {
        if (prima%j===0) {
            isPrime=false;
            break;
        }
        j++;
    }

    if (isPrime){
        console.log(prima);
    }
    prima++;
}
let array=[1,2,3,4,5];
array.forEach(element => {
    console.log(element);
});