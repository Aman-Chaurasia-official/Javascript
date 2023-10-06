function sum(a,b){

    try{
        if(b == 0){
        throw new Error("Cant be divide by 0")
        }
        else{
            return a/b
        }
    }
    catch(err){
        console.log(err.message);
    }
}


sum(10,0)