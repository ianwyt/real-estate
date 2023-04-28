import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  submitComment(commentData: { title: string; email: string; comment: string }): void {
    this.firestore.collection('comments').add({
      ...commentData,
      timestamp: new Date()
    });
  }

  getComments() {
    return this.firestore
      .collection('comments', ref => ref.orderBy('timestamp', 'desc'))
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.doc.id, ...(c.payload.doc.data() as any) }))
        )
      );
  }
}
