var Demo3 = /** @class */ (function () {
    function Demo3(id, name, ph, desig, PAN) {
        if (desig === void 0) { desig = "GET"; }
        console.log("==============..!");
        console.log("ID : " + id);
        console.log("Name : " + name);
        console.log("NUmber  : " + ph);
        console.log("DESIG   : " + desig);
        console.log("PAN   : " + PAN);
    }
    return Demo3;
}());
var d3 = new Demo3("TCS100", "Thanesh", 987654, "Clerk", "ABC123");
var d4 = new Demo3("TCS200", "Ramesh", 567897, "Developer", "XYZ0987");
var d4 = new Demo3("TCS200", "Ramesh", 567897, "Tester");
var d4 = new Demo3("TCS200", "Ramesh", 567897);
