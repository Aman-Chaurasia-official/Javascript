function Add(num1,num2) {
    const a = num1 + num2
    return a
    // console.log(num1 + num2);
}
const a = Add(2,4)
// console.log(a);

function username(name){
    if(name === undefined){
        console.log("Enter a Name");
        return
    }
    
    return `${name} just Logged In`
}

// console.log(username("aa"));

function CalculateCartPrice(...num1){
    return num1
}
// console.log (CalculateCartPrice(233,33,44,333444,556))

const user = {
    name :"Aman",
    Surname : "Chaurasia"

}

function handleobject(anyobject){
    console.log( `Name is ${anyobject.name} and Surname is ${anyobject.Surname}`);
}

// handleobject(user)

const arr = [200,300,400,500]

function secArr(getArray) {
    return getArray[1]
}

// console.log(secArr(arr));
console.log(secArr([200,300,400,500]));

