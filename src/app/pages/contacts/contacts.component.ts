import { Component } from '@angular/core';
  
@Component({
    selector: 'blogs-app',
    template: `
        <app-navbar-search></app-navbar-search>
        <app-blog-post-submission></app-blog-post-submission>
        <app-newsletter-header></app-newsletter-header>
        <app-features></app-features>
        <app-footer></app-footer>

    `
})
export class ContactsComponent { }