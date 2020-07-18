import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDialogsComponent } from './comp-dialogs.component';

describe('CompContactsComponent', () => {
  let component: CompDialogsComponent;
  let fixture: ComponentFixture<CompDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
