import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component  implements OnInit,OnDestroy{

  constructor(private db3:CommonservService){}
 
  data:any=[];

  ngOnInit(): void {
    this.data = this.db3.mydata;
  }



  a3comp(){
    this.db3.dbconnonlogic();
  //this.data = this.db3.mydata
   // console.log("A3 comp with 100 lines of code ")
  }
  ngOnDestroy(): void {
    // close//
    // connection close
  }


}
