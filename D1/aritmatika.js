class Aritmatika{
    constructor(){
        this.var1 = 10;
        this.var2 = 20;
        this.prosesAritmatika();
    }
    prosesAritmatika(){
        document.getElementById("tambah").innerHTML=this.var1+this.var2;
        document.getElementById("kurang").innerHTML=this.var1-this.var2;
        document.getElementById("kali").innerHTML=this.var1*this.var2;
        document.getElementById("bagi").innerHTML=this.var1/this.var2;
    }
}

let aritmatika = new Aritmatika();