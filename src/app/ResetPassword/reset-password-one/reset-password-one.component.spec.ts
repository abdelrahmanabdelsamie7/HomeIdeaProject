import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordOneComponent } from './reset-password-one.component';

describe('ResetPasswordOneComponent', () => {
  let component: ResetPasswordOneComponent;
  let fixture: ComponentFixture<ResetPasswordOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordOneComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
