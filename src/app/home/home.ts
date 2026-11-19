import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
    //Title
  title:string="Angular Basics"
  imageURL :string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwTxekH97ruVP8DIXQ-JTDO3gSQ0zEqTeIRVS7jqomA&s=10"
  username:string=""
  showAlert(){
    alert("Button clicked...")
  }
  getName(event:Event){
    const inputTag=event.target as HTMLInputElement
    this.username=inputTag.value
  }
  showName(ageInput:HTMLInputElement){
    alert(this.username && ageInput.value ? `username is ${this.username} and age is ${ageInput.value}` : `Please fill the form...`)
    this.username=""
  }
}
