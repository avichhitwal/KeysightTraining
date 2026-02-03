import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFOund } from './not-found';

describe('NotFOund', () => {
  let component: NotFOund;
  let fixture: ComponentFixture<NotFOund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFOund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFOund);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
