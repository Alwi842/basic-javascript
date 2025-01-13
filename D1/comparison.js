class Comparison{
    constructor(){
        this.equal=10;
        this.user={
            name: "alwi",
            age: "25",
            address: {
                city:"tangerang",
                country: "indonesia"
            }
        }
        this.processComparison();
    }
    processComparison(){
        document.getElementById("equal").innerHTML="equal : <p> is 10 equal to 10? " + (this.equal==10)+
        "<p>is 10 strict equal to '10'? " + (this.equal==='10')+
        "<p>is 10 equal to '10'? " + (this.equal=='10');
        document.getElementById("notEqual").innerHTML="Not Equal : <p> is 10 not equal to 11? " + (this.equal!=11)+
        "<p>is 10 strict not equal to '11'? " + (this.equal!=='11')+
        "<p>is 10 not equal to '11'? " + (this.equal!='11');
        document.getElementById("or").innerHTML="OR : <p> true or true? " + (true || true)+
        "<p>true or false?" + (true || false)+
        "<p>false or false? " + (false || false);
        document.getElementById("and").innerHTML="AND : <p> true or true? " + (true && true)+
        "<p>true or false?" + (true && false)+
        "<p>false or false? " + (false && false);

        //fokus pada data paling kanan, dan jika ada yang false, maka hasil undefined atau false
        let country = this.user&&this.user.address&&this.user.address.country;
        document.getElementById("varComp").innerHTML="variable comparison="+country;
        country = this.findCountry(this.user);
        document.getElementById("find").innerHTML="find country="+country;
    }
    findCountry(user){
        let country = this.user&&this.user.address&&this.user.address.country;
        return country || "data not found";
    }
}

let comparison = new Comparison();