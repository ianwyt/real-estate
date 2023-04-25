import { Component } from '@angular/core';
  
@Component({
    selector: 'testimonials-app',
    template: `
        <app-navbar-search></app-navbar-search>
        <app-features-header></app-features-header>
        <app-testimonials-feature></app-testimonials-feature>
        <app-footer></app-footer>

    `
})
export class TestimonialsComponent { }