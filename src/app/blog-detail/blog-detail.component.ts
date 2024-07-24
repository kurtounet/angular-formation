import { Component, inject } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Iblog } from '../../shared/interfaces/blog';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  blogService = inject(BlogService);
  route = inject(ActivatedRoute);
  article:Iblog|undefined;
  ngOnInit() {
    this.fetchOneArticle();    
  }
 
fetchOneArticle() {
  const id = this.route.snapshot.paramMap.get('id');
    this.blogService.fetchOne(id).subscribe(data => {
      this.article = data;
      console.log(this.article);
    });
}
// goBack() {
//     window.history.back();
//   }
}