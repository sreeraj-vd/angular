class person{
    name:string
    age:number
    address:string
    constructor(name:string,age:number,address:string){
    this.name=name
    this.age=age
    this.address=address
}
}
class user extends person{
    username:string
    password:string
    account:Account
    constructor(name,age,address,username,password){
        super(name,age,address)
        this.username=username
        this.password=password
    }
    createAccount(actype,acname,id){
        this.account=new Account(actype,acname,id)
    }
}
//let user1:person=new user("anna",12,"house1 ekm","anna123","anna")
let user1=new user("anna",12,"house1 ekm","anna123","anna")
console.log(user1)
user1.createAccount("official","gmail","GExp")
console.log(user1)
class Account{
    accounttype:string
    accountname:string
    id:string
    constructor(actype,acname,id){
        this.accounttype=actype
        this.accountname=acname
    }
}