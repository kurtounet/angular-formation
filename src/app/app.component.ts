import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationFormComponentComponent } from './registration-form-component/registration-form-component.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RegistrationFormComponentComponent,RouterOutlet, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Formation';
}
