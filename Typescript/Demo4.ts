class Manju
{
    land="5 land "
    constructor(){
    }
}
class Rama extends Manju
{
    site=5;
    money=500000;
    car="BENZ";
    constructor(){
        super();
        console.log("Land : "+this.land)
    }
}
class Ramesh extends Rama{
        edu="BE"
        constructor(){
                super();
                console.log("Hi Edu  :"+this.edu)
               console.log("CAR :"+this.car)
               console.log("Money : "+this.money) 
               console.log("SITE  : "+this.site)
               console.log("LAN D   : "+this.land)
        }
}
var r = new Ramesh();