import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {

  constructor(private db3:CommonservService){}

  data:any=[];
  a3comp(){
    this.db3.dbconnonlogic();
  this.data = this.db3.mydata
   // console.log("A3 comp with 100 lines of code ")
  }
}
