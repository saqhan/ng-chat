import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDialogsComponent } from './module-dialogs.component';

describe('ModuleDialogsComponent', () => {
  let component: ModuleDialogsComponent;
  let fixture: ComponentFixture<ModuleDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
