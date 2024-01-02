import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshFruitsComponent } from './fresh-fruits.component';

describe('FreshFruitsComponent', () => {
  let component: FreshFruitsComponent;
  let fixture: ComponentFixture<FreshFruitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshFruitsComponent]
    });
    fixture = TestBed.createComponent(FreshFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
