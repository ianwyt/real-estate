import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesPointsComponent } from './features-points.component';

describe('FeaturesPointsComponent', () => {
  let component: FeaturesPointsComponent;
  let fixture: ComponentFixture<FeaturesPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
