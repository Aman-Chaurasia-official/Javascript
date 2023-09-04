function user(name,password,email){
    this._name = name;
    this._password = password;
    this._email = email;

    Object.defineProperty(this,'name',{
        get: function(){
            return this._name
        },
        set: function(value){
            this._name = value
        }
    })

    // Object.defineProperty(this, 'email', {
    //     get: function(){
    //         return this._email.toUpperCase()
    //     },
    //     set: function(value){
    //         this._email = value
    //     }
    // })


}

const a = new user('chai',1234,'aman@chai')

// const chai = new user
console.log(a.name)