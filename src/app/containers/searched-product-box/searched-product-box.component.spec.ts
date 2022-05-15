import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedProductBoxComponent } from './searched-product-box.component';

describe('SearchedProductBoxComponent', () => {
  let component: SearchedProductBoxComponent;
  let fixture: ComponentFixture<SearchedProductBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedProductBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedProductBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
