const Mysum1 = Symbol("Key1")

const user = {
    name : "Aman",
    email : "Amanchaurasia961@gmail.com",
    number : 23,
    [Mysum1] : "Atul",
    Browser : "Chrome",
    SurName : "Chaurasia"
}

// console.log(user.Browser);
// console.log(user["email"]);
// console.log(user[Mysum1]);
// console.log(user);
// user.Browser = "FireFox"
// Object.freeze(user)
// console.log(user);

user.greeting = function(){
    console.log(`Hello ${this.name}`);
}
console.log(user.greeting);
// console.log(user);