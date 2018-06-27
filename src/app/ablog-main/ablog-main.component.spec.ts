import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblogMainComponent } from './ablog-main.component';

describe('AblogMainComponent', () => {
  let component: AblogMainComponent;
  let fixture: ComponentFixture<AblogMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblogMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblogMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
