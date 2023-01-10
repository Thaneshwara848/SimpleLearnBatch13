import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {
   
  }

  validate(username:any,password:any){

    if(username=="Thanesh" && password=="ABC123")
    {
      this.router.navigate(['/', 'home']);
    }
    else{
      alert("Invalid Credentails ....!")
    }

  }
}
