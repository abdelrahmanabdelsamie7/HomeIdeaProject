import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhoneAdvertisingComponent } from './mobile-phone-advertising.component';

describe('MobilePhoneAdvertisingComponent', () => {
  let component: MobilePhoneAdvertisingComponent;
  let fixture: ComponentFixture<MobilePhoneAdvertisingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilePhoneAdvertisingComponent]
    });
    fixture = TestBed.createComponent(MobilePhoneAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
