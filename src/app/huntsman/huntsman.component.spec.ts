import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuntsmanComponent } from './huntsman.component';

describe('HuntsmanComponent', () => {
  let component: HuntsmanComponent;
  let fixture: ComponentFixture<HuntsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuntsmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuntsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
