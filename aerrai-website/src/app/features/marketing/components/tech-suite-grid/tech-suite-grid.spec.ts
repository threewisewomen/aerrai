import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSuiteGrid } from './tech-suite-grid';

describe('TechSuiteGrid', () => {
  let component: TechSuiteGrid;
  let fixture: ComponentFixture<TechSuiteGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSuiteGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSuiteGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
