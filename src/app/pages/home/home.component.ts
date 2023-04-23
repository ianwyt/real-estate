import { Component } from '@angular/core';
  
@Component({
    selector: 'home-app',
    template: `
        <app-header></app-header>
        <app-blogs-home></app-blogs-home>
        <app-contacts-home></app-contacts-home>
        <app-newsletter></app-newsletter>
        <app-footer></app-footer>
    `
})
export class HomeComponent { }