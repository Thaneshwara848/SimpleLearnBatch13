import { Component } from '@angular/core';
import { CommonservService } from '../commonserv.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component {

  constructor(private db2 : CommonservService){}


  a2comp(){
    this.db2.dbconnonlogic();
    //console.log("A2 commp with 100 lines of code ")
  }
}
