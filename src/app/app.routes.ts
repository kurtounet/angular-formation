import { Routes } from "@angular/router";
import { CourseListComponentComponent } from "./course-list-component/course-list-component.component";
import { FruitComponent } from "./fruit/fruit.component";
import { HomeComponent } from "./home/home.component";
import { RegistrationFormComponentComponent } from "./registration-form-component/registration-form-component.component";
import { MangasComponent } from "./mangas/mangas.component";
import { CommentComponent } from "./comment/comment.component";
import { BlogComponent } from "./blog/blog.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { PostofuserComponent } from "./postofuser/postofuser.component";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { Error404Component } from "./error404/error404.component";
import { CreateCourseComponent } from "./create-course/create-course.component";

export const routes: Routes = [
    { path: '',component: HomeComponent }, 
    { path: 'programmes',component: CourseListComponentComponent },
    { path: 'blog/:id',component: BlogDetailComponent},// Route parametrique
    { path: 'registration',component: RegistrationFormComponentComponent },
    { path: 'newcourse',component: CreateCourseComponent},
    { path: 'fruit',component: FruitComponent },
    { path: 'mangas',component: MangasComponent },
    { path: 'pokemon',component: PokemonComponent },
    { path: 'blog',component: BlogComponent},
    { path: 'comment',component: CommentComponent},
    { path: 'postofuser',component: PostofuserComponent},
    { path: '**',component: Error404Component},

];
