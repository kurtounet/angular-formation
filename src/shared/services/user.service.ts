import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url ='https://jsonplaceholder.typicode.com/users';
  
  http = inject(HttpClient);

  getAllUser(){
    return this.http.get<Iuser[]>(this.url);
  }
 
   
  

    
}
