import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListsPageComponent } from './users-lists-page.component';

describe('UsersListsPageComponent', () => {
  let component: UsersListsPageComponent;
  let fixture: ComponentFixture<UsersListsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
