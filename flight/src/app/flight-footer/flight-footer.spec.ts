import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFooter } from './flight-footer';

describe('FlightFooter', () => {
  let component: FlightFooter;
  let fixture: ComponentFixture<FlightFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
