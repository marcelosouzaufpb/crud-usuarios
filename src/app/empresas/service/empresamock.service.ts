import { Injectable } from '@angular/core';
import { IempresaService } from './iempresa.service';
import { EmpresaDTOModule } from '../models/empresa-dto.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresamockService implements IempresaService {

  empresas: EmpresaDTOModule[] = [
    new EmpresaDTOModule(1, "00000", "XXXXXX", "sem razao social", "sem misao", "sem visao", []),
    new EmpresaDTOModule(2, "11111", "YYYYYY", "sem razao social", "sem misao", "sem visao", []),
  ]

  lastId: number = 2;

  list(): Observable<any> {
    return new Observable<any>(
      (obs) => {
        obs.next(this.empresas);
        obs.complete();
      }
    );
  }
  getById(id: number): Observable<any> {
    let auxEmpresa: EmpresaDTOModule;
    for (let empresa of this.empresas) if (empresa.id == id) auxEmpresa = empresa;
    return new Observable<EmpresaDTOModule>((obs) => {
      obs.next(auxEmpresa);
      obs.complete();
    });
  }
  update(empresa: EmpresaDTOModule): Observable<any> {
    let oldEmpresa = this.empresas
      .filter(empre => empre.id == empresa.id)
      .pop();

    Object.assign(oldEmpresa, empresa);

    return new Observable<any>((obs) => {
      obs.next(empresa);
      obs.complete();
    });
  }


  insert(empresa: any): Observable<any> {
    this.empresas.push(empresa);
    empresa.id = ++this.lastId;
    return new Observable<any>(
      (obs) => {
        obs.next(empresa);
        obs.complete();
      }
    );
  }
  delete(id: number): Observable<any> {
    const aux: EmpresaDTOModule[] = []
    this.empresas.forEach((empre) => {
      if (empre.id != id) {
        aux.push(empre);
      }
    });
    this.empresas = aux;
    return new Observable<any>(
      (obs) => {
        obs.next(true);
        obs.complete();
      }
    );
  }

  constructor() { }
}
