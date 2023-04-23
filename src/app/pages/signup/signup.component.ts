import { Component } from '@angular/core';
  
@Component({
    selector: 'signup-app',
    template: `
        <app-navbar></app-navbar>
        <app-registration></app-registration>
        <app-footer></app-footer>
    `
})
export class SignupComponent { }