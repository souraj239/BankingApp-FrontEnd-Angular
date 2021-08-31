import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashwithdrawComponent } from './cashwithdraw.component';

describe('CashwithdrawComponent', () => {
  let component: CashwithdrawComponent;
  let fixture: ComponentFixture<CashwithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashwithdrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashwithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
