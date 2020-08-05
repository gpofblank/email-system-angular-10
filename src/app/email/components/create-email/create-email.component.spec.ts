import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmailComponent } from './create-email.component';

describe('CreateEmailComponent', () => {
  let component: CreateEmailComponent;
  let fixture: ComponentFixture<CreateEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
