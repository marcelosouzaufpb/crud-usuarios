import { Injectable } from '@angular/core';
import { IempresaService } from './iempresa.service';
import { EmpresaDTOModule } from '../models/empresa-dto.module';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService implements IempresaService {

  constructor() { }

  list(): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  insert(empresa: EmpresaDTOModule): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
  update(empresa: EmpresaDTOModule): import("rxjs").Observable<any> {
    throw new Error("Method not implemented.");
  }
}
