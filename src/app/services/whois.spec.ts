import { TestBed } from '@angular/core/testing';

import { Whois } from './whois';

describe('Whois', () => {
  let service: Whois;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Whois);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
