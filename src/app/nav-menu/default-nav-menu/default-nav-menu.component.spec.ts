import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNavMenuComponent } from './default-nav-menu.component';

describe('DefaultNavMenuComponent', () => {
  let component: DefaultNavMenuComponent;
  let fixture: ComponentFixture<DefaultNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultNavMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
