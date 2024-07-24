import { Injectable } from '@angular/core';
import { mockCourses } from '../mocks/mockCourses';
import { ICourse } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  fetchAllCourses(){    
    return mockCourses;
  }
  addCourse(course: ICourse){   
    mockCourses.push(course);
    console.log(mockCourses);
  }
}
