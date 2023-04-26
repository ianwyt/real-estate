import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post-submission',
  templateUrl: './blog-post-submission.component.html',
  styleUrls: ['./blog-post-submission.component.css']
})
export class BlogPostSubmissionComponent implements OnInit {
  blogPostForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.blogPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', [Validators.required, BlogPostSubmissionComponent.imageValidator]]
    });
  }

  ngOnInit(): void {
  }

  private static imageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB
  
    if (control.value && control.value instanceof File) {
      const fileExtensionRaw = control.value.name.split('.').pop();
      if (!fileExtensionRaw) {
        return { invalidExtension: true };
      }
      
      const fileExtension = fileExtensionRaw.toLowerCase();
      const fileSize = control.value.size;
  
      if (!allowedExtensions.includes(fileExtension)) {
        return { invalidExtension: true };
      }
  
      if (fileSize > maxSizeInBytes) {
        return { maxSizeExceeded: true };
      }
    }
  
    return null;
  } 

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0] || null;
    if (file) {
      this.selectedFile = file;
      this.blogPostForm.patchValue({ image: this.selectedFile });
      this.blogPostForm.get('image')?.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.blogPostForm.valid) {
      const formData = new FormData();
      formData.append('title', this.blogPostForm.get('title')?.value || '');
      formData.append('content', this.blogPostForm.get('content')?.value || '');
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      const serverEndpoint = 'http://localhost:3000/api/blog-posts';

      this.http.post(serverEndpoint, formData).subscribe(
        (response) => {
          console.log('Blog post submission successful:', response);
        },
        (error) => {
          console.error('Blog post submission failed:', error);
        }
      );
    }
  }
}
