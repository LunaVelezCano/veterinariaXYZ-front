import { TestBed } from '@angular/core/testing';

import { RegistroDuenoService } from './registro-dueno.service';

describe('RegistroDuenoService', () => {
  let service: RegistroDuenoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroDuenoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
