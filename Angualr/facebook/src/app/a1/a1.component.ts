import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component {

  constructor(private db1:CommonservService){}

  a1commp(){
    this.db1.dbconnonlogic();
    //console.log("A1 comp with 100 lines of code ")
  }
}
