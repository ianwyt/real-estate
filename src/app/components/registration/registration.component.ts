// import { Component } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.scss']
// })
// export class RegistrationComponent {
//   constructor(private firestore: AngularFirestore) { }

//   async register(first_name: string, last_name: string, email: string, password: string) {
//     try {
//       await this.firestore.collection('users').add({ first_name, last_name, email, password });
//       alert('Registration successful!');
//     } catch (error) {
//       console.error('Error storing user data: ', error);
//       alert('Failed to register. Please try again.');
//     }
//   }
// }

import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(private firestore: AngularFirestore) {}

  register(formValues: any): void {
    const { firstName, lastName, email, password } = formValues;

    this.firestore
      .collection('users')
      .add({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      .then(() => {
        alert('Registration successful!');
      })
      .catch((error) => {
        console.error('Error storing user data: ', error);
        alert('Failed to register. Please try again.');
      });
  }
}