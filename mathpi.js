const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descriptor);

const aman = {
    username : "Aman",
    UserId : 2365,
    Password : 1234,

    isAvailable : function(){
        console.log("Aman Chaurasia");
    }
}

// console.log(Object.getOwnPropertyDescriptor(aman,'username'));

Object.defineProperty(aman,'UserId',{
    // writable : false
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(aman,'UserId'));

for (let [key,value] of Object.entries(aman)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} & ${value}`);
    }
   
}