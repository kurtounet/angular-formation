import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-search-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-course.component.html',
  styleUrl: './search-course.component.css'
})
export class SearchCourseComponent {
  @Input() formationsList: any;
  @Output() formationSelected = new EventEmitter();
 selectedFormation(event:any) {
 
  return this.formationSelected.emit(event.target.value);
   
 }
}
