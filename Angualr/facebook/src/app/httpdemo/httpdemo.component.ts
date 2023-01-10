import { Component, OnInit } from '@angular/core';
import { ApidemoService } from '../apidemo.service';

@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html',
  styleUrls: ['./httpdemo.component.css']
})
export class HttpdemoComponent implements OnInit{

  products:any=[];

  constructor(private serv : ApidemoService){}
  ngOnInit(): void {
  
    this.serv.fetchProduct().subscribe(data=>{
     this.products =data;

    },er=>{})
  }


}
