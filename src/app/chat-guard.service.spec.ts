import { TestBed } from '@angular/core/testing';

import { ChatGuardService } from './chat-guard.service';

describe('ChatGuardService', () => {
  let service: ChatGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
