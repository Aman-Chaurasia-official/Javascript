class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `1234`
    }
}

const aman = new User("ATUL")
// console.log(aman.createId()); 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher("Iphone","aman@example.com")

console.log(Iphone.logMe());