import { TestBed } from '@angular/core/testing';

import { JurosService } from './juros.service';

describe('JurosService', () => {
  let service: JurosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JurosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
