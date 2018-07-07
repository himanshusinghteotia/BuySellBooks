import { TestBed, inject } from '@angular/core/testing';

import { WishshowService } from './wishshow.service';

describe('WishshowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishshowService]
    });
  });

  it('should be created', inject([WishshowService], (service: WishshowService) => {
    expect(service).toBeTruthy();
  }));
});
