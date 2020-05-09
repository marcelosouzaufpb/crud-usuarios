import { Observable } from 'rxjs';
import { EmpresaDTOModule } from '../models/empresa-dto.module';


export interface IempresaService {
  list(): Observable<any>;
  getById(id: number): Observable<any>;
  insert(empresa: EmpresaDTOModule): Observable<any>;
  delete(id: number): Observable<any>;
  update(empresa: EmpresaDTOModule): Observable<any>;
}