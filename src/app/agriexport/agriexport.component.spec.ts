import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriexportComponent } from './agriexport.component';

describe('AgriexportComponent', () => {
  let component: AgriexportComponent;
  let fixture: ComponentFixture<AgriexportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriexportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
