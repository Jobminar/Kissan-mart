import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafyVegetablesComponent } from './leafy-vegetables.component';

describe('LeafyVegetablesComponent', () => {
  let component: LeafyVegetablesComponent;
  let fixture: ComponentFixture<LeafyVegetablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeafyVegetablesComponent]
    });
    fixture = TestBed.createComponent(LeafyVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
