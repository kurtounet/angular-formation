import { Routes } from '@angular/router';
import { CourseListComponentComponent } from './course-list-component/course-list-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '',component: HomeComponent }, 
    { path: 'courses',component: CourseListComponentComponent },

];
