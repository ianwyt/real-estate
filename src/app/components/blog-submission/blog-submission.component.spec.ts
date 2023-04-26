import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSubmissionComponent } from './blog-submission.component';

describe('BlogSubmissionComponent', () => {
  let component: BlogSubmissionComponent;
  let fixture: ComponentFixture<BlogSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
