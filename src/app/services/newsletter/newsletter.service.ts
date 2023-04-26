import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  constructor(
    private db: AngularFireDatabase,
    private functions: AngularFireFunctions
  ) {}

  addSubscriber(email: string): Promise<void> {
    return this.db.list('subscribers').push({ email }) as unknown as Promise<void>;
  }

  sendWelcomeEmail(email: string): Promise<void> {
    const callable = this.functions.httpsCallable('sendWelcomeEmail');
    return callable({ email }).toPromise();
  }
}