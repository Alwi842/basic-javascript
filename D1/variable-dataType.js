class InputData{
    constructor(){
        //tipe data primitif
        this.nama="alwi"; //string
        this.umur = 25; //int
        this.salary = 3000000; //permanent data
        this.isMarried = false;//boolean
        this.isTeacher = false;
        this.wife;
        this.wife=false;
        //tipedata
        this.namaKariawan=["alwi","danu","dimas"];
        this.detailkariawan=[
            {nama:"alwi", umur:30},
            {nama:"danu", umur:20},
            {nama:"dimas", umur:10}
        ];
        //output console
        console.log("Nama : " + this.nama);
        console.log("Umur : " + this.umur);
        console.log("Gaji : " + this.salary);
        console.log("Menikah : " + this.isMarried);
        console.log("Guru : " + this.isTeacher);
        console.log("wife : " + this.wife);

        this.processInput();
    }
    processInput(){
        document.getElementById("nama").innerHTML="Nama : " + this.nama;
        document.getElementById("age").innerHTML="Umur : "+this.umur;
        document.getElementById("salary").innerHTML="Gaji : "+this.salary;
        document.getElementById("married").innerHTML="Menikah : "+this.isMarried;
        document.getElementById("teacher").innerHTML="Guru : "+this.isTeacher;
        document.getElementById("wife").innerHTML="Istri : "+this.wife;
        document.getElementById("namaKariawan").innerHTML="list nama kariawan : ";
        for (let i=0; i<this.namaKariawan.length;i++){
            document.getElementById("namaKariawan").innerHTML+=this.namaKariawan[i]+", ";
        }
        document.getElementById("detailKariawan").innerHTML="detail kariawan : ";
        for (let i=0; i<this.detailkariawan.length;i++){
            document.getElementById("detailKariawan").innerHTML+="<p>"
            for(let key in this.detailkariawan[i])
                document.getElementById("detailKariawan").innerHTML+=key+" : "+this.detailkariawan[i][key]+", ";
        }
    }
}

var inputData = new InputData();