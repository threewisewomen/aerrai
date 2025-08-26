import { TestBed } from '@angular/core/testing';

import { TechSuite } from './tech-suite';

describe('TechSuite', () => {
  let service: TechSuite;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechSuite);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
