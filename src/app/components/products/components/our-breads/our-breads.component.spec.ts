import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBreadsComponent } from './our-breads.component';

describe('OurBreadsComponent', () => {
  let component: OurBreadsComponent;
  let fixture: ComponentFixture<OurBreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBreadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
