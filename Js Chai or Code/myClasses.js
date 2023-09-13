// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

// encryptPassword(){
//     return `${this.password} Amannn`
// }
// changeUserName(){
//     return ` ${this.username.toUpperCase()}`
// }

// }

// const chai = new User("Aman","ama222.com",1234)
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


function user(name,phone_no,address) {
    this.name = name;
    this.phone_no = phone_no;
    this.address = address;
}

user.prototype.encryptPassword = function () {
    return `${this.phone_no} #####`
}
user.prototype.changAddress = function(){
    return `${this.address} R No.381,`
}

const tea = new user("Aman",123455677,"virar")
console.log(tea.encryptPassword());

console.log("Hello");