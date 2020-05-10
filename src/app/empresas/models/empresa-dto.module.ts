import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';

export class EmpresaDTOModule {
  id: number
  cnpj: string;
  nomeFantasia: string;
  razaoSocial: string;
  misao: string;
  visao: string;
  funcionario: UsuarioDTO[];

  constructor(
    id: number,
    cnpj: string,
    nomeFantasia: string,
    razaoSocial: string,
    misao: string,
    visao: string,
    funcionario: UsuarioDTO[]
  ) {
    this.id = id;
    this.cnpj = cnpj;
    this.nomeFantasia = nomeFantasia;
    this.razaoSocial = razaoSocial;
    this.misao = misao;
    this.visao = visao;
    this.funcionario = funcionario;
  }
}
