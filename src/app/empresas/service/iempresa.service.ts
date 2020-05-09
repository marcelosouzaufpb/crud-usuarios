import { Observable } from 'rxjs';


export interface IempresaService {
  list(): Observable<any>;
  getById(id: number): Observable<any>;
  insert(empresa: any): Observable<any>;
  delete(id: number): Observable<any>;
  update(empresa: any): Observable<any>;
}