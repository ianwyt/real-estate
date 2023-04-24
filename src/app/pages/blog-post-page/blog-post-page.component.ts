import { Component } from '@angular/core';
  
@Component({
    selector: 'blogs-app',
    template: `
        <app-navbar-search></app-navbar-search>
        <app-blog-post></app-blog-post>
        <app-newsletter></app-newsletter>
        <app-footer></app-footer>

    `
})
export class BlogPostPageComponent { }