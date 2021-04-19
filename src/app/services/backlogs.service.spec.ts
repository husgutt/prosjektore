import { TestBed } from '@angular/core/testing';

import { BacklogsService } from './backlogs.service';

describe('BacklogsService', () => {
  let service: BacklogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacklogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
