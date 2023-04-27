import { Injectable } from '@angular/core';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  async register(email: string, password: string): Promise<void> {
    try {
      const auth = getAuth();
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  async signInWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      await signInWithPopup(auth, provider);
      console.log('Google sign-in successful');
    } catch (error) {
      console.error('Failed to sign in with Google:', error);
    }
  }
}
