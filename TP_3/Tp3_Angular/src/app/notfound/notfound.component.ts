import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.sass'
})
export class NotfoundComponent {
  constructor(private router: Router) {}


}
