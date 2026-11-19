import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  email:string=""
  password:string=""

  showDetails(){
    alert(this.email && this.password ? `Email is ${this.email} Password is :${this.password}` : "Please Fill the Form")
  }
}
