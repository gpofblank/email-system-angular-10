import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailPageComponent } from './edit-email-page.component';

describe('EditEmailPageComponent', () => {
  let component: EditEmailPageComponent;
  let fixture: ComponentFixture<EditEmailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
