var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rama = /** @class */ (function () {
    function Rama() {
        this.site = 5;
        this.money = 500000;
        this.car = "BENZ";
    }
    return Rama;
}());
var Ramesh = /** @class */ (function (_super) {
    __extends(Ramesh, _super);
    function Ramesh() {
        var _this = _super.call(this) || this;
        _this.edu = "BE";
        console.log("Hi Edu  :" + _this.edu);
        console.log("CAR :" + _this.car);
        console.log("Money : " + _this.money);
        console.log("SITE  : " + _this.site);
        return _this;
    }
    return Ramesh;
}(Rama));
var r = new Ramesh();
