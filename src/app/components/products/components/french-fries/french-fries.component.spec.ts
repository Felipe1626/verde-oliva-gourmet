import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchFriesComponent } from './french-fries.component';

describe('FrenchFriesComponent', () => {
  let component: FrenchFriesComponent;
  let fixture: ComponentFixture<FrenchFriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenchFriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrenchFriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
