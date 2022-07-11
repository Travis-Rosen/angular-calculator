import { TestBed } from '@angular/core/testing';

import { CalcNumbersService } from './calc-numbers.service';

describe('CalcNumbersService', () => {
  let service: CalcNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcNumbersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
