import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-form-component',
  standalone: true,
  imports: [],
  templateUrl: './registration-form-component.component.html',
  styleUrl: './registration-form-component.component.css'
})
export class RegistrationFormComponentComponent {
 /*
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required]
      }),
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      currentPosition: ['', Validators.required],
      companyAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', Validators.required]
      })
    });
  }
*/
 /*
  onSubmit() {
    alert('Formulaire soumis avec succès !');
   
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Formulaire soumis avec succès !');
    }
  }*/
}
