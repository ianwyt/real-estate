import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async login() {
    if (this.loginForm.valid) {
      const emailControl = this.loginForm.get('email');
      const passwordControl = this.loginForm.get('password');

      if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;

        try {
          await this.auth.signInWithEmailAndPassword(email, password);
          console.log('Login successful!');
          this.router.navigate(['/blogs']); // replace '/blogs' with the route to your blog page
        } catch (error) {
          console.error('Failed to login:', error);
          console.log('Please check your email and password, or register first.');
        }
      }
    }
  }

  async signInWithGoogle(): Promise<void> {
    try {
      await this.authService.signInWithGoogle();
      console.log('Sign in with Google successful!');
      this.router.navigate(['/blogs']); // navigate to the blogs route after successful sign-in
    } catch (error) {
      console.error('Failed to sign in with Google:', error);
    }
  }
}
