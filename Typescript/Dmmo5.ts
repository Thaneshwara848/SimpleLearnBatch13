class Demo5
{
   private id=100;
    protected name="Suresh"
    public age=30;
    constructor(){
        console.log("Desfaul Constror")
    }
    // constructor(id , name ){
    //     console.log("ID :"+id )
    // }
    display(id){

    }
}
class XYZ extends Demo5 {

    constructor(){
        super();
        // console.log(this.id) private is only for sinlge class  
        console.log(this.name) // only othurised  :  
        console.log(this.age) // any where 
    }
    display(id: any): void {
        
    }
}