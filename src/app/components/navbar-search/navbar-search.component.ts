import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.css']
})
export class NavbarSearchComponent {
  constructor(private router: Router) { }

  search(query: string) {
    const lowerCaseQuery = query.toLowerCase();

    switch (lowerCaseQuery) {
      case 'blogs':
        this.router.navigate(['/blogs']);
        break;
      case 'signin':
        this.router.navigate(['/signin']);
        break;
      case 'signup':
        this.router.navigate(['/signup']);
        break;
      case 'testimonials':
        this.router.navigate(['/testimonials']);
        break;
      case 'about':
        this.router.navigate(['/about']);
        break;
      case 'newsletter':
        this.router.navigate(['/newsletter']);
        break;
      case 'submit blog':
        this.router.navigate(['/submitblog']);
        break;
      default:
        this.router.navigate(['/page-not-found']);
        break;
    }
  }
}
