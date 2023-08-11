let a = 10;
var b = 420;
const c = 30;

if (true) {
  let a = 10;
  var b = 20;
  const c = 30;
  console.log("BLOCK SCOPE : ",a);
console.log("BLOCK SCOPE : ",b);
console.log("BLOCK SCOPE : ",c);


}

console.log("GLOBAL SCOPE : ",a);
console.log("GLOBAL SCOPE : ",b);
console.log("GLOBAL SCOPE : ",c);
