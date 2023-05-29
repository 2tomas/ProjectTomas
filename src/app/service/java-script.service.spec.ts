import { TestBed } from '@angular/core/testing';

import { JavaScriptService } from './java-script.service';

describe('JavaScriptService', () => {
  let service: JavaScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
