import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjutancyComponent } from './adjutancy.component';

describe('AdjutancyComponent', () => {
  let component: AdjutancyComponent;
  let fixture: ComponentFixture<AdjutancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjutancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjutancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
