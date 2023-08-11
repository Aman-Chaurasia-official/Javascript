// let a = 10;
// var b = 420;
// const c = 30;

// if (true) {
//   let a = 10;
//   var b = 20;
//   const c = 30;
//   console.log("BLOCK SCOPE : ",a);
// console.log("BLOCK SCOPE : ",b);
// console.log("BLOCK SCOPE : ",c);


// }

// console.log("GLOBAL SCOPE : ",a);
// console.log("GLOBAL SCOPE : ",b);
// console.log("GLOBAL SCOPE : ",c);

// function one() {
//   const username = "Aman"
//   function two(){
//     const ID = 1234
//       console.log(ID);
//     console.log(username);
//   }
//   two()
// }
// one()

// if(true){
//   const username = "Aman"
//   if(username === "Aman"){
//     const website = 12345
//     console.log(username)
//   }
//   // console.log(website);
// }

console.log(addOne(5));
function addOne(num){
  return num + 1
}



const addTwo = function(num){
  return num + 2
}

console.log(addTwo(5));