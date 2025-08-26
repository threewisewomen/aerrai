import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSuiteCard } from './tech-suite-card';

describe('TechSuiteCard', () => {
  let component: TechSuiteCard;
  let fixture: ComponentFixture<TechSuiteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechSuiteCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSuiteCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
