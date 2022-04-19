import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaleonessaComponent } from './laleonessa.component';

describe('LaleonessaComponent', () => {
  let component: LaleonessaComponent;
  let fixture: ComponentFixture<LaleonessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaleonessaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaleonessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
