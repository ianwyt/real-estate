import { Component } from '@angular/core';
  
@Component({
    selector: 'errors-app',
    template: `
        <app-navbar-search></app-navbar-search>
        <app-http-codes></app-http-codes>
        <app-newsletter></app-newsletter>
        <app-footer></app-footer>
    `
})
export class ErrorsComponent { }