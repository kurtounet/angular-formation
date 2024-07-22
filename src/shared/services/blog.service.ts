import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Iblog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  urlApi = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }
 
  fetchAll() {
    // <Iblog> Type de retour
    return this.http.get<Iblog[]>(this.urlApi);
  }

  fetchOne(id:number) {
    return this.http.get(this.urlApi + '/' + id);
  }
  // post() {
  //   return this.http.post(this.urlApi + '/', blog);
  // }
  delete(id:number) {
    return this.http.get(this.urlApi + '/' + id);
  }
}
