import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IAuth } from '../../../interfaces/auth';
import { form, FormField, pattern, required, validate } from '@angular/forms/signals';
import { ErrorValidations } from 'lib';

@Component({
  selector: 'cdev-login',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormField, ErrorValidations],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  initialValues = {
    email: '',
    password: '',
  };

  private authModel = signal<IAuth>(this.initialValues);
  authForm = form(this.authModel, schema => {
    required(schema.email, { message: 'Email is required' });
    pattern(schema.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: 'Invalid email format' });
    required(schema.password, { message: 'Password is required' });
    pattern(schema.password, /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: 'Password must be at least 8 characters long and contain both letters and numbers' });
  });

  save() {
    if (this.authForm().valid()) {
      console.log('Form is valid, submitting data:', this.authModel());
    }
  }
}
