import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private firestore: AngularFirestore, private router: Router) {}

  register(formValues: any): void {
    const { firstName, lastName, email, password } = formValues;

    // Check if the email already exists in the 'users' collection
    this.firestore
      .collection('users', (ref) => ref.where('email', '==', email))
      .get()
      .toPromise()
      .then((querySnapshot) => {
        if (!querySnapshot || querySnapshot.empty) {
          // If the email is not found, create a new user
          this.firestore
            .collection('users')
            .add({
              first_name: firstName,
              last_name: lastName,
              email: email,
              password: password,
            })
            .then(() => {
              console.log('Registration successful!');
              this.router.navigate(['/blogs']); // replace '/blog' with the route to your blog page
            })
            .catch((error) => {
              console.error('Error storing user data: ', error);
              alert('Failed to register. Please try again.');
            });
        } else {
          // If the email already exists, show an error message
          alert('This email is already registered. Please use a different email or log in.');
        }
      })
      .catch((error) => {
        console.error('Error checking for existing email: ', error);
        alert('Failed to register. Please try again.');
      });
  }
}