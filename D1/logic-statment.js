//statelent dengan 1 kondisi, bisa string dan nomor
let remoteButton=1;

switch (remoteButton) {
    case 1: {
        console.log("turned on");
        break;
    }
    case 2: {
        console.log("Turned off");
        break;
    }

    default: {
        console.log("invalid input");
        break;
    }
}

//if else if statement : if(kondisi) {kode} else if(kondisi) {kode} else{kode}
let nilai=80;
if (nilai>80) console.log("nilai kamu A");
else if (nilai>40) console.log("nilai kamu C");
else if (nilai>60) console.log("nilai kamu B");
else if (nilai>20) console.log("nilai kamu D");
else if (nilai>0) console.log("nilai kamu E");
else console.log("nilai kamu T");
//nested if, dimana if didalam if

let kuota=10;
if (kuota>0) {
    if (nilai>60)
        console.log("kamu lulus");
    else 
        console.log("kamu tidak lulus");
} else 
    console.log("Kuota habis");

//terminary operator
let hasil = kuota==0 ? "kuota habis" : nilai>60 ? "kamu lulus" : "kamu tidak lulus";
console.log(hasil);