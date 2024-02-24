import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDemoComponent } from './nav-bar-demo.component';

describe('NavBarDemoComponent', () => {
  let component: NavBarDemoComponent;
  let fixture: ComponentFixture<NavBarDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarDemoComponent]
    });
    fixture = TestBed.createComponent(NavBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
