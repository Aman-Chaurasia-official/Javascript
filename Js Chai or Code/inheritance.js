class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

const chai = new Teacher("chai","Chai@teacher",1234)

chai.addCourse()

const tea = new User("Aman")
tea.logMe()

console.log(chai instanceof Teacher);