// const aman = {
//     username:'Aman',
//     signedIn:4,
//     logout:3,

//     isSignedIn : function(){
//         console.log(this);
//     }

// }
// console.log(aman.signedIn);
// console.log(aman.isSignedIn());

function user(username,loggedIn,Logout) {

    this.username = username
    this.loggedIn = loggedIn
    this.Logout = Logout

    // return this
}

const userOne = new user("Aman",11,false)
const userTwo = new user("Atul@example",23,true)

console.log(userOne);
console.log(userTwo);
