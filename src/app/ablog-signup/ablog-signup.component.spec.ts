import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblogSignupComponent } from './ablog-signup.component';

describe('AblogSignupComponent', () => {
  let component: AblogSignupComponent;
  let fixture: ComponentFixture<AblogSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblogSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblogSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
