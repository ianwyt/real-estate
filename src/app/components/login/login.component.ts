import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private router: Router
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
        const isRegistered = await this.isUserRegistered(email, password);
  
        if (isRegistered) {
          console.log('Login successful!');
          this.router.navigate(['/blogs']); // replace '/blogs' with the route to your blog page
        } else {
          alert('Failed to login. Please check your email and password, or register first.');
        }
      }
    }
  }

  async isUserRegistered(email: string, password: string): Promise<boolean> {
    try {
      const userQuerySnapshot = await this.firestore.collection('users').ref.where('email', '==', email).get();
      if (!userQuerySnapshot.empty) {
        const userDoc = userQuerySnapshot.docs[0];
        return (userDoc.data() as any).password === password;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error checking user registration status: ', error);
      return false;
    }
  }
}
