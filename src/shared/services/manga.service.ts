import { Injectable } from '@angular/core'; 
import { mockMangas } from '../mocks/mockMangas';
@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor() { }

  fetchAllMangas(){
    return mockMangas;
  }
}
