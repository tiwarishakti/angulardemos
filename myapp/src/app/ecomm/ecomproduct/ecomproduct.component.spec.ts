import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomproductComponent } from './ecomproduct.component';

describe('EcomproductComponent', () => {
  let component: EcomproductComponent;
  let fixture: ComponentFixture<EcomproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
