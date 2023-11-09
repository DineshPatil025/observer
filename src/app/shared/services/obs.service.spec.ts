import { TestBed } from '@angular/core/testing';

import { ObsService } from './obs.service';
import { Subject } from 'rxjs';

describe('ObsService', () => {
  let service: ObsService;

  let subject$ = new Subject()

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
