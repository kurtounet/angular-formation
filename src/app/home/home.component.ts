import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  image:string = 'https://humanbooster.com/wp-content/uploads/2021/02/intro-image.png';
   isVisible: boolean = true;
   stastusUser=true;
   //role ='ADMIN';
   role ='EMPLOYEE';
   //role ='CLIENT';
   
  // isMajeur: boolean = this.age > 18 ? true:false;
  connecter(){
    this.stastusUser = true;
  }
  deconnecter(){
    this.stastusUser = false;
  }
}
