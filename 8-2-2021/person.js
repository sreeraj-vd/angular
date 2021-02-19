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
var person = /** @class */ (function () {
    function person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return person;
}());
var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user(name, age, address, username, password) {
        var _this = _super.call(this, name, age, address) || this;
        _this.username = username;
        _this.password = password;
        return _this;
    }
    user.prototype.createAccount = function (actype, acname, id) {
        this.account = new Account(actype, acname, id);
    };
    return user;
}(person));
//let user1:person=new user("anna",12,"house1 ekm","anna123","anna")
var user1 = new user("anna", 12, "house1 ekm", "anna123", "anna");
console.log(user1);
user1.createAccount("official", "gmail", "GExp");
console.log(user1);
var Account = /** @class */ (function () {
    function Account(actype, acname, id) {
        this.accounttype = actype;
        this.accountname = acname;
    }
    return Account;
}());
