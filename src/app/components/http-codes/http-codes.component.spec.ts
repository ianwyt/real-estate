import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCodesComponent } from './http-codes.component';

describe('HttpCodesComponent', () => {
  let component: HttpCodesComponent;
  let fixture: ComponentFixture<HttpCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
