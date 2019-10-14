import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreregisterPage } from './preregister.page';

describe('PreregisterPage', () => {
  let component: PreregisterPage;
  let fixture: ComponentFixture<PreregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreregisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
