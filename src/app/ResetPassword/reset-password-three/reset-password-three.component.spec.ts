import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordThreeComponent } from './reset-password-three.component';

describe('ResetPasswordThreeComponent', () => {
  let component: ResetPasswordThreeComponent;
  let fixture: ComponentFixture<ResetPasswordThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordThreeComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
