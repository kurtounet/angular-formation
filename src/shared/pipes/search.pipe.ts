import { inject, Pipe, PipeTransform } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ICourse } from '../interfaces/course';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

 
  transform(values: ICourse[], terms: string):ICourse[] {     
    return values.filter(value=> value.nom?.toLowerCase().includes(terms.toLowerCase()) );   
    
    // let arrayCourse = this.courseService.fetchAllCourses().filter(
    //   formation => formation.nom?.toLowerCase().includes(value.toLowerCase())
    // );
    // return arrayCourse;
  }

}
