import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments$: Observable<any[]> = new Observable();

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.comments$ = this.firebaseService.getComments();
  }
}
