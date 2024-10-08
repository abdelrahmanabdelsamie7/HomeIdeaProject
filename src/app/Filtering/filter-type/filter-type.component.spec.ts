import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTypeComponent } from './filter-type.component';

describe('FilterTypeComponent', () => {
  let component: FilterTypeComponent;
  let fixture: ComponentFixture<FilterTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTypeComponent]
    });
    fixture = TestBed.createComponent(FilterTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
