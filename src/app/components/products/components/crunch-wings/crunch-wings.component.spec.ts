import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrunchWingsComponent } from './crunch-wings.component';

describe('CrunchWingsComponent', () => {
  let component: CrunchWingsComponent;
  let fixture: ComponentFixture<CrunchWingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrunchWingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrunchWingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
