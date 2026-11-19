import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  email:string=""
  password:string=""
  loginRouter=inject(Router)

  login(){
    if(this.email && this.password){
      alert(`Email is ${this.email} and Password is ${this.password}`)
      this.loginRouter.navigateByUrl('/')
    }else{
      alert("Please fill the form Completely")
    }
  }
}
