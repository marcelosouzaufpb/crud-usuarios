import { TestBed } from '@angular/core/testing';

import { IempresaService } from './iempresa.service';

describe('IempresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IempresaService = TestBed.get(IempresaService);
    expect(service).toBeTruthy();
  });
});
