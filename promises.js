// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task Complelte");
//     resolve()
// },2000)
//     })
    

// promiseOne.then(function(){
//     console.log('Promise Consumed');
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async 2 task Completed');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Async 2 Consumed');
//     }
// )

// const PromiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Aman",email:'aman.com'})
//     },1000)
// })

// PromiseThree.then(function(user){
//     console.log(user);
// })

// const PromiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//      let error = false
//      if(!error){
//         resolve({username:"Atul",Password:'1234'});
//      }
//      else{
//         reject('ERROR Something went Wrong');
//      }
//     }, 2000)
// })

// PromiseFour.then((user) =>{
//     console.log(user);
//     return user.username
// }).then((username)=> {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(function(){
//     console.log("The Promise is either resolve or rejected");
// })

// const PromiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username:'JS',Password:'123456'})
//         }
//         else{
//             reject('Error Js went Something Wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await PromiseFive
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function allusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('error : '+ error);
//     }
// }

// allusers()

fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then(function(data){
    console.log(data);
}

)
.catch(function(error){
    console.log('error');
})