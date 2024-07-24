import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Iblog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  urlApi = 'https://jsonplaceholder.typicode.com';

  constructor(private http:HttpClient) { }
 
  fetchAll() {    
    // <Iblog>[] Collection de Iblog de type
    return this.http.get<Iblog[]>(this.urlApi);
  }

  fetchOne(id:any) {
    // <Iblog> Type de retour
    return this.http.get<Iblog>(`${this.urlApi}/posts/${id}`);
  }
  // fetchOne(userid:number) {
  //   return this.http.get(this.urlApi + '/' + userid);
  // }
  // post() {
  //   return this.http.post(this.urlApi + '/', blog);
  // }
  delete(id:number) {
    return this.http.get(this.urlApi + '/' + id);
  }
}
