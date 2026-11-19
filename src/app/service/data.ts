
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {

  http = inject(HttpClient);

  // API call - get users
  // https://jsonplaceholder.typicode.com/users

  getUserAPI(): Observable<any> {
    return this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getAllTodoAPI() {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
  }

}
