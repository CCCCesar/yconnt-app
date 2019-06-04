import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycelComponent } from './buycel.component';

describe('BuycelComponent', () => {
  let component: BuycelComponent;
  let fixture: ComponentFixture<BuycelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuycelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
