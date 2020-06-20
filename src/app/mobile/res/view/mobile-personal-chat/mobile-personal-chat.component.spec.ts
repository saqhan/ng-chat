import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePersonalChatComponent } from './mobile-personal-chat.component';

describe('MobilePersonalChatComponent', () => {
  let component: MobilePersonalChatComponent;
  let fixture: ComponentFixture<MobilePersonalChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePersonalChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePersonalChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
