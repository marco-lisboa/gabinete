/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RaspagemService } from './services/raspagem.service';

describe('Service: Raspagem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RaspagemService]
    });
  });

  it('should ...', inject([RaspagemService], (service: RaspagemService) => {
    expect(service).toBeTruthy();
  }));
});
