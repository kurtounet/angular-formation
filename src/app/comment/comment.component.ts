import { Component, inject } from '@angular/core';
import { CommentService } from '../../shared/services/comment.service';
import { Icomment } from '../../shared/interfaces/comment';
import { UserService } from '../../shared/services/user.service';
import { Iuser } from '../../shared/interfaces/user';
import { Iblog } from '../../shared/interfaces/blog';
import { BlogService } from '../../shared/services/blog.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  
  comments: Icomment[]=[];
  posts: Iblog[]=[];
  post: Iblog[] = [];
  
  // 
  commentService =inject(CommentService)
  postService =inject(BlogService)
 ngOnInit() {
   this.getComments();
 }
 getPost() {
  this.postService.fetchAll().subscribe(
    data => this.posts = data,
    error => console.error("user not found",error)
   
  );
 }
  getComments(){

    this.commentService.fetchAll().subscribe(data => {
      this.comments = data;
    })

  }

  getCommentByPostId(postId:number){
     const comment = this.comments.find(comment => comment.id === postId)
      return comment ? comment.name : 'user not found';
  }
 

}
