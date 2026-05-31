import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Login } from '../../views/login/login';

@Component({
  selector: 'cdev-page-login',
  imports: [Login, MatCardModule],
  templateUrl: './page-login.html',
  styleUrl: './page-login.scss',
})
export class PageLogin {}
