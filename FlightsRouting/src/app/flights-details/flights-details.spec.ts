import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsDetails } from './flights-details';

describe('FlightsDetails', () => {
  let component: FlightsDetails;
  let fixture: ComponentFixture<FlightsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
