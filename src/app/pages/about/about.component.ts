import { Component } from '@angular/core';
  
@Component({
    selector: 'about-app',
    template: `
        <app-navbar-search></app-navbar-search>
        <app-team></app-team>
        <app-footer></app-footer>
    `
})
export class AboutComponent { }