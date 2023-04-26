import { Component } from '@angular/core';
  
@Component({
    selector: 'blog-post-submission-app',
    template: `
        <app-navbar-search></app-navbar-search>
        <app-blog-submission></app-blog-submission>
        <app-footer></app-footer>

    `
})
export class BlogPostSubmissionComponent { }