import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSystem1Component } from './filter-system1.component';

describe('FilterSystem1Component', () => {
  let component: FilterSystem1Component;
  let fixture: ComponentFixture<FilterSystem1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSystem1Component]
    });
    fixture = TestBed.createComponent(FilterSystem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
