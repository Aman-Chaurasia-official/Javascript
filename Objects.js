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
// console.log(user.greeting);
// console.log(user);


const Data = {
    1 : "a",
    Full : {
        a : "2",
        Name : {
            3: "c",
            d: "4"
        }
    }
}

// console.log(Data.Full.Name);

const obj1 = {a : "123",b : "456"}
const obj2 = {c : "789",d : "101"}
const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(obj1.hasOwnProperty("a"));

const Course = {
    CoursrName : "JavaScript",
    CourseID  : "123456",
    CourseInstructor : "Hitesh@Chaudary"
}

const {CourseInstructor : Instructor,CourseID : ID} = Course

console.log(Instructor,ID);