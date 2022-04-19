import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnigearComponent } from './omnigear.component';

describe('OmnigearComponent', () => {
  let component: OmnigearComponent;
  let fixture: ComponentFixture<OmnigearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmnigearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmnigearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
