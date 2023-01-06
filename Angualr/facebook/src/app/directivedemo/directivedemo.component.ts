import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  templateUrl: './directivedemo.component.html',
  styleUrls: ['./directivedemo.component.css']
})
export class DirectivedemoComponent {

  choice = true;
 
  arr=[1,2,3,4,5,6,7,8];
  fruits=["Apple","Banana"]
  // abc(){
  //   for(let i=0;i<=this.arr.length;i++)
  //   {
  //     console.log("I :"+i)
  //   }
  // }
  addfruit(fruit:any){
    this.fruits.push(fruit);
  }
    // op="1";
    // option(useroption:string){
    //   this.op=useroption;
     
    // }
}
