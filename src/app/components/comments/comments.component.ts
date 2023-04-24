import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

interface Comment {
  id?: string;
  username: string;
  comment: string;
  timestamp: Date;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentForm: FormGroup;
  comments: Comment[];

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
    this.commentForm = this.fb.group({
      username: ['', Validators.required],
      comment: ['', Validators.required]
    });
    this.comments = [];
  }

  ngOnInit(): void {
    this.firestore.collection<Comment>('comments', ref => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Comment;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })).subscribe(comments => {
        this.comments = comments;
      });
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      const usernameControl = this.commentForm.get('username');
      const commentControl = this.commentForm.get('comment');
      if (usernameControl && commentControl) {
        this.firestore.collection('comments').add({
          username: usernameControl.value,
          comment: commentControl.value,
          timestamp: new Date()
        }).then(() => {
          this.commentForm.reset();
        });
      }
    }
  }
}