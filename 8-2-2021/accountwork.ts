class Acc{
    branch:string
    date:Date
    ifsccode:number
    constructor(branch:string,date:Date,ifsccode:number){
        this.branch=branch
        this.date=date
        this.ifsccode=ifsccode

}
}
class fixed extends Acc{
    intrate:20
    minbal:10000
    constructor(branch,date,ifsccode){
    super(branch,date,ifsccode)
}
}
class savings extends Acc{
    intrate2:10
    minbal2:1000
    constructor(branch,date,ifsccode){
    super(branch,date,ifsccode)

}
}
class Accountholder{
    accname:string
    age:number
    dob:number
    balance:number
    type:string
    account:any
    constructor(accname:string,age:number,dob:number,balance:number,type:string){
        this.accname=accname
        this.age=age
        this.dob=dob
        this.balance=balance
        this.type=type
        //if(this.type=="savings"){
         if(this.type=="fixed"){
       // this.account=new savings("EKM",new Date(),"SBI110101")
        this.account=new fixed("EKM",new Date(),"SBI110101")
        console.log(this.account)
}

let  accountholderslist=[]
function createAccount(accname,age,dob,type,balance) {
     accountholderslist.push(new Accountholder(accname,age,dob,balance,type))
    
    
}
//let user1=new Accountholder("sree",24,31-12-1996,4000,"savings")
//console.log(user1)

//let user1=new Accountholder("sree",24,31-12-1996,4000,"savings")
//console.log(user1)
let user2=new Accountholder("jeev",20,31-12-1998,5000,"fixed")
console.log(user2)
    }
}
class deposit{
    
}
