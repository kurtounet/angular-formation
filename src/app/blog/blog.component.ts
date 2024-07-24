import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';
import { Iblog } from '../../shared/interfaces/blog';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
// Arreter le flux d'entre des datas
// DECLARATION DES VARIABLES
articles: Iblog[] = [];
// INJECTION DE DEPENDANCE
blogService=inject(BlogService);

// INITIALISATION DU COMPONENT
  ngOnInit(): void {
    this.getBlog();
  }
// DECLARATION DES FONCTIONS
  getBlog() {

    this.blogService.fetchAll().subscribe(data => {
      this.articles = data;
    });

    // opérateur subscribe : permet de souscrire aux flux d'entré des datas
    // opérateur pipe : permet de filtrer les flux d'entre des datas
    //
    
  }

}
