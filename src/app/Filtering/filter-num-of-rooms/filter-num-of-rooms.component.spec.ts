import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNumOfRoomsComponent } from './filter-num-of-rooms.component';

describe('FilterNumOfRoomsComponent', () => {
  let component: FilterNumOfRoomsComponent;
  let fixture: ComponentFixture<FilterNumOfRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterNumOfRoomsComponent]
    });
    fixture = TestBed.createComponent(FilterNumOfRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
