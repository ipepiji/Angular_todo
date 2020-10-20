import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNavMenuComponent } from './customer-nav-menu.component';

describe('CustomerNavMenuComponent', () => {
  let component: CustomerNavMenuComponent;
  let fixture: ComponentFixture<CustomerNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
