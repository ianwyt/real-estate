import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsFeatureComponent } from './testimonials-feature.component';

describe('TestimonialsFeatureComponent', () => {
  let component: TestimonialsFeatureComponent;
  let fixture: ComponentFixture<TestimonialsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonialsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
