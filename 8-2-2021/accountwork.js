var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Acc = /** @class */ (function () {
    function Acc(branch, date, ifsccode) {
        this.branch = branch;
        this.date = date;
        this.ifsccode = ifsccode;
    }
    return Acc;
}());
var fixed = /** @class */ (function (_super) {
    __extends(fixed, _super);
    function fixed(branch, date, ifsccode) {
        return _super.call(this, branch, date, ifsccode) || this;
    }
    return fixed;
}(Acc));
var savings = /** @class */ (function (_super) {
    __extends(savings, _super);
    function savings(branch, date, ifsccode) {
        return _super.call(this, branch, date, ifsccode) || this;
    }
    return savings;
}(Acc));
var Accountholder = /** @class */ (function () {
    function Accountholder(accname, age, dob, balance, type) {
        this.accname = accname;
        this.age = age;
        this.dob = dob;
        this.balance = balance;
        this.type = type;
        //if(this.type=="savings"){
        if (this.type == "fixed") {
            // this.account=new savings("EKM",new Date(),"SBI110101")
            this.account = new fixed("EKM", new Date(), "SBI110101");
            console.log(this.account);
        }
        var accountholderslist = [];
        function createAccount(accname, age, dob, type, balance) {
            accountholderslist.push(new Accountholder(accname, age, dob, balance, type));
        }
        //let user1=new Accountholder("sree",24,31-12-1996,4000,"savings")
        //console.log(user1)
    }
    return Accountholder;
}());
//let user1=new Accountholder("sree",24,31-12-1996,4000,"savings")
//console.log(user1)
var user2 = new Accountholder("jeev", 20, 31 - 12 - 1998, 5000, "fixed");
console.log(user2);
