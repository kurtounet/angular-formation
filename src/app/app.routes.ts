import { Routes } from '@angular/router';
import { CourseListComponentComponent } from './course-list-component/course-list-component.component';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponentComponent } from './registration-form-component/registration-form-component.component';
import { FruitComponent } from './fruit/fruit.component';
import { MangasComponent } from './mangas/mangas.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path: '',component: HomeComponent }, 
    { path: 'programmes',component: CourseListComponentComponent },
    { path: 'registration',component: RegistrationFormComponentComponent },
    { path: 'fruit',component: FruitComponent },
    { path: 'mangas',component: MangasComponent },
    { path: 'pokemon',component: PokemonComponent },
    { path: 'blog',component: BlogComponent},

];
