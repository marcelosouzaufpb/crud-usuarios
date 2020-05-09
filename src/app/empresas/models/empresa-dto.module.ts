import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmpresaDTOModule {
  id: number
  cnpj: string;
  nomeFantasia: string;
  razaoSocial: string;
  missão: string;
  visao: string;
  funcionario: UsuarioDTO[];
}
