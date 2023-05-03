// interface usersTyped{
//     name:string,
//     address:any,
//     email:string,
//     age:number,
// }
// let users:usersTyped ={
//     name:"Rushi",
//     age:34,
//     address:"k",
//     email:''
// }   
// users.name="Petter"
// console.warn(users)
// <--------------UNION TYPES----------->
// let data:string|number|boolean='anil'
// data =30;
// data=true
// console.warn(data)
// <-----------Functions----------->
// function Calsc():string{
//     return 'Rushik';
// }
// console.log(Calsc())
// function Calsc(a:number,b?:number):number{
//     return b?a+b:a;
// }
// console.log(Calsc(100))
// class App{
//     // name="Rama"
//     name:string="Rushikesh";
//     constructor(){
//         console.log('const called')
//     }
//     getName():string
//     {
//         return this.name
//     }
// }
// let a1=new App();
// a1.getName()
// class Child {
//     //   name = "Rushi Bhumkar";
//     getname(name) {
//       return name;
//     }
//   }
//   let c1 = new Child();
//   console.log(c1.getname("Ram"));
// <------------parent and child in ts--------->
// class Parents{
//     name;
//     setName(name){
//         this.name = name;
//     }
// }
// class Child extends Parents {
//     name="Rushi"
//     getname() {
//       return this.name;
//     }
//   }
//   let c1 = new Child();
//   c1.setName("Petter");
//   console.log(c1.getname());
// for run namespace child function in terminal
// command write in terminal: tsc <Filename> --outfile <OutFleName(anyName)> 
// /// <reference path="./Utils.ts"/>
// namespace UsersUtils 
// {
//     export class Users extends Parent implements userType{
//         getName()
//         {
//             return this.name
//         }
//     }
// }
// let u1 = new UsersUtils.Users();
// u1.setName("Bruce")
// console.warn(u1.getName())
