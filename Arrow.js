const user = {
    username : "Aman",
    price : "345",

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to this site`);
        console.log(this);
    }
}

// user.welcomeMessage()

user.username = "Atul"
// user.welcomeMessage()

function one(){
    name : "Aman", 
    ss = 3
    console.log(this.username)
}
// one()

 const two = () =>{
    name : "Aman", 
    ss = 3
    console.log(this)
}

// two()

// const addTwoNum = (num1,num2) => {
//     return num1 + num2
// }

// const addTwoNum = (num1,num2) => (num1 + num2)

// const addTwoNum = (num1,num2) => (username = "Aman")


// console.log(addTwoNum(2,5))

(function chai(user){
    console.log(`DB CONNECTED TO SERVER ${user}`);
})('Aman');

( (user) => console.log(`DB SERVER CONNECTED TO ${user}`) )('Aman Server');