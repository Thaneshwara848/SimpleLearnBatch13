class Demo6
{
    constructor(){
        for(var i=0;i<=10;i++){ // globl escope 
        //for(let i=0;i<=10;i++){ // block or local scope 
            console.log(i)
        }
        console.log("I :"+ i  )
    }
}

var d6= new Demo6();