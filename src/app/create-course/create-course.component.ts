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
  public form:FormGroup = new FormGroup({
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

/* NgModel
service = new CourseService();
course: ICourse = {      id: 0,      image: '',      nom: '',      stackTechnique: '',      dates: '',
      titre: '',      numbreDePlace: 0,      tarif: 0,       adresse: ""  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', this.course);
      // Add your logic here to submit the form data to the server
      this.service.saveCourse(this.course);
    }

  }




  */

}
