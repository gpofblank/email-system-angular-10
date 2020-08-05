import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailListPageComponent } from './email-list-page.component';

describe('EmailListPageComponent', () => {
  let component: EmailListPageComponent;
  let fixture: ComponentFixture<EmailListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
