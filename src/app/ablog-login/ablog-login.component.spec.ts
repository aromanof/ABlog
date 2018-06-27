import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblogLoginComponent } from './ablog-login.component';

describe('AblogLoginComponent', () => {
  let component: AblogLoginComponent;
  let fixture: ComponentFixture<AblogLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblogLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblogLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
