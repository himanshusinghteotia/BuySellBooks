import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmsgComponent } from './showmsg.component';

describe('ShowmsgComponent', () => {
  let component: ShowmsgComponent;
  let fixture: ComponentFixture<ShowmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
