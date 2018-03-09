import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderonlineComponent } from './orderonline.component';

describe('OrderonlineComponent', () => {
  let component: OrderonlineComponent;
  let fixture: ComponentFixture<OrderonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderonlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
