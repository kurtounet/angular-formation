import { Injectable } from '@angular/core';
import { mockCourses } from '../mocks/mockCourses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  fetchAllCourses(){    
    return mockCourses;
  }
}
