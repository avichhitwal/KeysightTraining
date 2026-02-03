import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFlights } from './manager-flights';

describe('ManagerFlights', () => {
  let component: ManagerFlights;
  let fixture: ComponentFixture<ManagerFlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerFlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerFlights);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
