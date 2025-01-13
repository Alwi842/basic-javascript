function print(){
    if(arguments.length==0) return undefined;
    let combine="";
    for(var i=0;i<arguments.length;i++) 
        combine+=arguments[i]+" ";
    return combine;
}
function penjumblahan(){
    if(arguments.length==0) return undefined;
    let total=0;
    for(var i=0;i<arguments.length;i++) 
        if (typeof(arguments[i]=="number")) {
            total+=arguments[i]
        } else return "input salah";
        return total;
}
function angkaPositif(angka){
    if (angka<0) 
        return "angka negatif";
    else 
        return "angka positif";
}
const kali = (a,b) => {
    return a*b;
}
console.log(print("apa kabar","siapa kamu"));
console.log(penjumblahan(10,20,30));
console.log(kali(10,20));