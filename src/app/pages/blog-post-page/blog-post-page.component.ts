import { Component } from '@angular/core';
  
@Component({
    selector: 'blogs-app',
    template: `
        <app-navbar-search></app-navbar-search>
        <app-blog-post></app-blog-post>
        <app-comments></app-comments>
        <app-comment-list></app-comment-list>
        <app-footer></app-footer>

    `
})
export class BlogPostPageComponent { }