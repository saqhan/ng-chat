import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompContactsComponent } from './comp-contacts.component';

describe('CompContactsComponent', () => {
  let component: CompContactsComponent;
  let fixture: ComponentFixture<CompContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
