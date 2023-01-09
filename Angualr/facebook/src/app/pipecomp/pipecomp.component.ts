import { Component } from '@angular/core';

@Component({
  selector: 'app-pipecomp',
  templateUrl: './pipecomp.component.html',
  styleUrls: ['./pipecomp.component.css']
})
export class PipecompComponent {


  name="SUreSH is a trainER";
  amount=123456789;
  d = new Date();




























  emps=[
    {
      "id":100,
      "name":"ThaNEsh",
      "age":35,
      "salary":40000,
      "desig":"DevELOPer"
    },
    {
      "id":200,
      "name":"RamESH",
      "age":25,
      "salary":50000,
      "desig":"TesTER"
    },
    {
      "id":400,
      "name":"GanESH",
      "age":36,
      "salary":6543,
      "desig":"ManaGER"
    },

  ]

}
