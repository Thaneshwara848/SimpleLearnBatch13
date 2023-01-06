import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
name="Thanesh"
desig ="Trainer"
compnay="TCS";

abc(){
  alert("Hi you clicked the buttion ")
}

xyz(myname:any){
  console.log("Hi Xyz "+myname)
}

total=0;
emi=0;
caculate(p:any,t:any,r:any){
  // console.log("Principle :"+p)
  // console.log("TIME  :"+t)
  // console.log("ROI  :"+r)
  this.total=(p*t*r)/100;
  this.emi= this.total/t;
}

choice=false;
myimg="../../assets/nat11.jpg"

}
