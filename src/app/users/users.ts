
import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Data } from '../service/data';

@Component({
  imports: [DatePipe, AsyncPipe],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users {

  todayDate = new Date();

  api = inject(Data);

  allUser = this.api.getUserAPI();

  allTodo:any = signal([]);
  
  ngOnInit(){
    this.getAllTodos()
  }

  getAllTodos() {

    this.api.getAllTodoAPI().subscribe({

      next: (res: any) => {
        this.allTodo.set(res.slice(0, 10));
      },

      error: (reason: any) => {
        console.log(reason);
      },

      complete: () => {
        console.log("Api call completed");
      }

    });

  }
}
