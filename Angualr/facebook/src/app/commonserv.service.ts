import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonservService {

  constructor() { }

  dbconnonlogic(){
    console.log("Hi 100 lines of code from service ....!")
  }

  mydata=[
    {
        "name":"Pravin",
        "age":45
    },
    {
      "name":"Rajesh",
      "age":45
  },{
    "name":"Thanesh",
    "age":45
},{
  "name":"Suresh",
  "age":45
},{
  "name":"Mahesh",
  "age":45
},
]


}
