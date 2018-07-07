import { TestBed, inject } from '@angular/core/testing';

import { CheckuserService } from './checkuser.service';

describe('CheckuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckuserService]
    });
  });

  it('should be created', inject([CheckuserService], (service: CheckuserService) => {
    expect(service).toBeTruthy();
  }));
});
