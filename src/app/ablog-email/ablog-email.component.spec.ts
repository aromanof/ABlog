import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AblogEmailComponent } from './ablog-email.component';

describe('AblogEmailComponent', () => {
  let component: AblogEmailComponent;
  let fixture: ComponentFixture<AblogEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AblogEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AblogEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
