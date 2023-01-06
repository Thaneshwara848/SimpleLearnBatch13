class Demo3
{
    constructor(id : any, name:string,ph :number,desig ="GET", PAN ?:string)
    {
        console.log("==============..!")
        console.log("ID : "+id )
        console.log("Name : "+ name)
        console.log("NUmber  : "+ ph)
        console.log("DESIG   : "+desig )
        console.log("PAN   : "+ PAN)
    }
}

var d3= new Demo3( "TCS100" ,"Thanesh",987654,"Clerk","ABC123");
var d4= new Demo3( "TCS200" ,"Ramesh",567897,"Developer","XYZ0987");
var d4= new Demo3( "TCS200" ,"Ramesh",567897,"Tester");
var d4= new Demo3( "TCS200" ,"Ramesh",567897);

// paramanet 
// optional paramanetr 
// default paramanert 


