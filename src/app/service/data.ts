import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class Data {
    http=inject(HttpClient)

    //API call - get users
    getUserAPI():Observable<any>{
       return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
    }
}
