import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
})
export class BackButtonComponent {
  faArrowLeft = faArrowLeft;
  faArrowColor: string = '#000';

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/']);
  }
}
