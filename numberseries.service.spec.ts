import { TestBed } from '@angular/core/testing';

import { NumberseriesService } from './numberseries.service';

describe('NumberseriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberseriesService = TestBed.get(NumberseriesService);
    expect(service).toBeTruthy();
  });
});
