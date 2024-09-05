import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordTwoComponent } from './reset-password-two.component';

describe('ResetPasswordTwoComponent', () => {
  let component: ResetPasswordTwoComponent;
  let fixture: ComponentFixture<ResetPasswordTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordTwoComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
