import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaginationComplexComponent } from './table-pagination-complex.component';

describe('TablePaginationComplexComponent', () => {
  let component: TablePaginationComplexComponent;
  let fixture: ComponentFixture<TablePaginationComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePaginationComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePaginationComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
