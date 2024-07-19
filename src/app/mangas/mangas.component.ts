import { Component, OnInit   } from '@angular/core';
import { MangaService } from '../../shared/services/manga.service';
import { IManga } from '../../shared/interfaces/manga';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mangas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mangas.component.html',
  styleUrl: './mangas.component.css'
})
export class MangasComponent {
//
  arrayMangas: IManga[] = [];
constructor(private mangaService:MangaService){ 
  
}
ngOnInit():void{
  this.arrayMangas = this.mangaService.fetchAllMangas();
  console.log(this.arrayMangas);
}
}
