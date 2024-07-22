import { inject, Injectable, OnInit } from '@angular/core';
import { Icomment } from '../interfaces/comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService{

  urlApi = 'https://jsonplaceholder.typicode.com/comments';
  http = inject(HttpClient);
  

   fetchAll(){
    return this.http.get<Icomment[]>(this.urlApi);
   }

}


  