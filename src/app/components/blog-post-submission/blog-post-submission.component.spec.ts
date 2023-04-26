import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostSubmissionComponent } from './blog-post-submission.component';

describe('BlogPostSubmissionComponent', () => {
  let component: BlogPostSubmissionComponent;
  let fixture: ComponentFixture<BlogPostSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogPostSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
