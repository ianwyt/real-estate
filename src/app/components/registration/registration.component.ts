import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthenticationService, private router: Router) {}

  private isFirebaseError(error: unknown): error is { code: string } {
    return (error as { code?: string }).code !== undefined;
  }

  async register(formValues: any): Promise<void> {
    const { email, password } = formValues;

    try {
      await this.authService.register(email, password);
      this.router.navigate(['/blogs']); // replace '/blogs' with the route to your blog page
    } catch (error) {
      if (this.isFirebaseError(error) && error.code === 'auth/email-already-in-use') {
        console.log('This email is already registered. Please use a different email or log in.');
      } else {
        console.log('Failed to register. Please try again.');
      }
    }
  }
}