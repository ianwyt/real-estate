import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Subscription } from 'rxjs';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  title = '';
  email = '';
  comment = '';
  user: User | null = null;
  private userSubscription!: Subscription;

  constructor(private firebaseService: FirebaseService, private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.user = user;
      if (user) {
        this.email = user.email ?? '';
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onSubmit(): void {
    if (this.user && this.title && this.email && this.comment) {
      this.firebaseService.submitComment({
        title: this.title,
        email: this.email,
        comment: this.comment
      });

      // Reset the form
      this.title = '';
      this.comment = '';
    } else {
      console.error('User not authenticated');
    }
  }
}
