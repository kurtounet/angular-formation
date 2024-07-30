import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { RouterLink,Router } from '@angular/router';
import { RegistrationFormComponentComponent } from '../registration-form-component/registration-form-component.component';
import { SearchCourseComponent } from '../search-course/search-course.component';
import { ICourse } from '../../shared/interfaces/course';
import { CourseService } from '../../shared/services/course.service';
import { lieux } from '../../shared/interfaces/lieux';
import { ToDollarsPipe } from '../../shared/pipes/to-dollars.pipe';
import { CbPipe } from '../../shared/pipes/cb.pipe';
import { ToTTCPipe } from '../../shared/pipes/to-ttc.pipe';
import { SearchPipe } from '../../shared/pipes/search.pipe';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-course-list-component',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RegistrationFormComponentComponent,
    SearchCourseComponent,
    ToDollarsPipe, 
    CbPipe, 
    ToTTCPipe, 
    SearchPipe,     
    FormsModule
],
  templateUrl: './course-list-component.component.html',
  styleUrl: './course-list-component.component.css'
})
export class CourseListComponentComponent implements OnInit{
    constructor(private courseServices: CourseService) { }
    
    MontantHT:number = 1000;
    searchNgModel:string="";
    listnom =['jean','paul','marie']; 
    today:Date = new Date();
    quantity:number = 0;
    isActive:boolean = true;
    isDisabled:boolean = false;
    isLight:boolean = false;
    fontSize:number = 12;
    COURSES: ICourse[] = [];
ngOnInit(): void {
    
    this.COURSES = this.courseServices.fetchAllCourses();
    this.ArrayFormationFilter = this.COURSES;
    
}
   light(){
       this.isLight = !this.isLight;
   }
    //IT, Design ou Dev

    ArrayStackTechnique:  string[] = ['Tout','Infra','Dev','Design'];    
    selectedStackTechnique:string='';  
    ArrayFormationFilter: ICourse[] = this.COURSES;  
    recevSelectedFormation(nameFormation: string) { 
        this.selectedStackTechnique = nameFormation; 
        if (nameFormation === 'Tout') {
            this.ArrayFormationFilter = this.COURSES;
            //console.log(this.ArrayFormationFilter );            
        } else {            
             this.ArrayFormationFilter = this.COURSES.filter((formation) => formation.stackTechnique === nameFormation);
             
             //console.log(this.ArrayFormationFilter );            
        }
    }
    onSubmit(lieux: Array<lieux>) {
        let message='Lieux des course : \n';
        for(let i = 0; i < lieux.length; i++) {
            message +=lieux[i].adresse +' '+ lieux[i].ville+'\n';           
        }
        alert(message);
    }
    increment() {
        this.quantity++;
    }
    decrement() {
        if(this.quantity > 0){        
        this.quantity--;
        }
    }
    

}
