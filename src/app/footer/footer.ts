import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  technologies:string[]=[
    "HTML",
    "CSS",
    "Bootstrap",
    "Figma",
    "Javascript",
    "Github",
    "MongoDB",
    "Angular"
  ]
  isActive:boolean=false
  toggleActive(){
    this.isActive=!this.isActive
  }
}
