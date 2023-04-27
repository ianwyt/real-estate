import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

export interface BlogPost {
  email: string;
  title: string;
  post: string;
  dateCreated: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private firestore: AngularFirestore) { }

  submitBlogPost(blogData: BlogPost): Promise<void> {
    return this.firestore.collection('blogPosts').add(blogData).then(() => {
      console.log('Blog post saved successfully.');
    }).catch((error) => {
      console.error('Error saving blog post:', error);
    });
  }
}
