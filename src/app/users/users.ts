import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Data } from '../service/data';

@Component({
  imports: [DatePipe,AsyncPipe],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {
  todayDate=new Date()
  api=inject(Data)
  allUser=this.api.getUserAPI()

  allTodo=signal([])
}
