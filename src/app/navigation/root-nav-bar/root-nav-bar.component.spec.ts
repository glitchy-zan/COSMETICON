import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootNavBarComponent } from './root-nav-bar.component';

describe('RootNavBarComponent', () => {
  let component: RootNavBarComponent;
  let fixture: ComponentFixture<RootNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
