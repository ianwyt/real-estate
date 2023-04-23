import { Component } from '@angular/core';
  
@Component({
    selector: 'signin-app',
    template: `
        <app-navbar></app-navbar>
        <app-login></app-login>
        <app-footer></app-footer>
    `
})
export class SigninComponent { }