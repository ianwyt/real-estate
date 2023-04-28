import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  title = '';
  email = '';
  comment = '';

  constructor(private firebaseService: FirebaseService) {}

  onSubmit(): void {
    if (this.title && this.email && this.comment) {
      this.firebaseService.submitComment({
        title: this.title,
        email: this.email,
        comment: this.comment
      });

      // Reset the form
      this.title = '';
      this.email = '';
      this.comment = '';
    }
  }
}