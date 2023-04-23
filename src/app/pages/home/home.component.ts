import { Component } from '@angular/core';
  
@Component({
    selector: 'home-app',
    template: `
        <app-navbar></app-navbar>
        <app-login></app-login>
        <app-footer></app-footer>

    `
})
export class HomeComponent { }