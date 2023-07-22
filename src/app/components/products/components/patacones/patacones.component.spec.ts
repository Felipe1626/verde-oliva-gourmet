import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PataconesComponent } from './patacones.component';

describe('PataconesComponent', () => {
  let component: PataconesComponent;
  let fixture: ComponentFixture<PataconesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PataconesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PataconesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
