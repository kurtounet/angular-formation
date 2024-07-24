import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../../shared/services/course.service';
import { ICourse } from '../../shared/interfaces/course';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {
  coursesService = inject(CourseService);

  public form = new FormGroup({
    image:new FormControl(''), 
    nom:new FormControl(''),  
    stackTechnique:new FormControl(''),  
    dates:new FormControl(''), 
    titre:new FormControl(''),  
    nombrePlaces: new FormControl(''),
    tarif:new FormControl(''),
    lieux:new FormControl([]), 
  })
  onSubmit(){   
    this.coursesService.addCourse(this.form.value);    
  } 

}
