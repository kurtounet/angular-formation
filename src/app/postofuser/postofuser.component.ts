import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { Iuser } from '../../shared/interfaces/user';
import { BlogService } from '../../shared/services/blog.service';
import { Iblog } from '../../shared/interfaces/blog';

@Component({
  selector: 'app-postofuser',
  standalone: true,
  imports: [],
  templateUrl: './postofuser.component.html',
  styleUrl: './postofuser.component.css'
})
export class PostofuserComponent {
  users: Iuser[] = [];
  post: Iblog[] = [];
  postUser: Array<Iblog[]> = [];
  constructor(
    private userService: UserService,
    private blogService : BlogService
  ) { }
  
  ngOnInit() {
    this.getUsers();
    this.getBlog();
    
    console.log("Post des user",this.postUser);
    
   }
   getUsers() {
    this.userService.getAllUser().subscribe(
      data => this.users = data,
      error => console.error("user not found",error)
     
    );
  }
    getBlog(){
      this.blogService.fetchAll().subscribe(data => {
        this.post = data;
       // console.log(this.post);
         
      });
    }
    treePost(userId:number){
      const user = this.users.find(username => username.id === userId)
      return user ? user.name : 'user not found';
    }

  }
    
  

