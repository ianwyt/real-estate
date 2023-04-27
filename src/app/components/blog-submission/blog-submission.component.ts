import { Component } from '@angular/core';
import { BlogPostService } from '../../services/blog-post/blog-post.service';
import { BlogPost } from '../../services/blog-post/blog-post.service';

@Component({
  selector: 'app-blog-submission',
  templateUrl: './blog-submission.component.html',
  styleUrls: ['./blog-submission.component.css']
})
export class BlogSubmissionComponent {
  email: string = '';
  title: string = '';
  post: string = '';

  constructor(private blogPostService: BlogPostService) { }

  onSubmit() {
    const blogData: BlogPost = {
      email: this.email,
      title: this.title,
      post: this.post,
      dateCreated: new Date().toISOString(),
    };
    console.log('Sending blog post data:', blogData); // Add this line for debugging
    this.blogPostService.submitBlogPost(blogData);
  }
}
