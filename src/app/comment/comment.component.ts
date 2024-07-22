import { Component, inject } from '@angular/core';
import { CommentService } from '../../shared/services/comment.service';
import { Icomment } from '../../shared/interfaces/comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  comments: Icomment[]=[];

  commentService =inject(CommentService)
 ngOnInit() {
   this.getComments();
 }
  getComments(){

    this.commentService.fetchAll().subscribe(data => {
      this.comments = data;
    })

  }
 

}
