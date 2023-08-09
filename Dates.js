let myDate = new Date()

// console.log("",myDate)
// console.log("DateString : ",myDate.toDateString());
// console.log("ISOString : ",myDate.toISOString());
// console.log("JSON : ",myDate.toJSON());
// console.log("LocaleDateString : ",myDate.toLocaleDateString());
// console.log("LocaleString : ",myDate.toLocaleString());
// console.log("TimeString : ",myDate.toTimeString());
// console.log("String : ",myDate.toString());
// console.log("UTCString : ",myDate.toUTCString());

let myNewDate = new Date(2011,0,6)
let myNewDate1 = new Date(2011,0,6,3,4,65)
let myNewDate2 = new Date("2023-5-23")

// console.log(myNewDate)
// console.log(myNewDate1);
// console.log(myNewDate2);

let Dates = Date.now()
// console.log(Dates)
// console.log(myNewDate2.getTime())

// `${Dates.getTime()}`

myDate.toLocaleString('default',{
    weekday : "long"
})