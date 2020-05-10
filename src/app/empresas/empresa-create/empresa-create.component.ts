import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresaService } from '../service/empresa.service';
import { Router } from '@angular/router';
import { EmpresasModule } from '../empresas.module';
import { EmpresaDTOModule } from '../models/empresa-dto.module';
import { UsuarioService } from 'src/app/usuarios/service/usuario.service';
import { UsuarioDTO } from 'src/app/usuarios/models/usuarioDTO.entity';
import { UsuarioMockService } from 'src/app/usuarios/service/usuariomock.service';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {

  private formGroup: FormGroup;
  private submitted: boolean = false;

  users: UsuarioDTO[] = [];
  selectorUsers: UsuarioDTO[]  = [];

  constructor(
    private service: EmpresaService,
    private usuarioService: UsuarioMockService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {
    this.usuarioService.list().subscribe(res => {
    this.users = res;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.generateForm();
  }

  get form() {
    return this.formGroup.controls;
  }

  generateForm() {
    this.formGroup = this.formBuilder.group(
      {
        cnpj: ['', [Validators.required]],
        nomeFantasia: ['', [Validators.required]],
        razaoSocial: ['', [Validators.required]],
        misao: ['', [Validators.required]],
        visao: ['', [Validators.required]],
        funcionario: ['', []],
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }

    const empresa: EmpresaDTOModule = new EmpresaDTOModule(
      null,
      this.formGroup.controls["cnpj"].value,
      this.formGroup.controls["nomeFantasia"].value,
      this.formGroup.controls["razaoSocial"].value,
      this.formGroup.controls["misao"].value,
      this.formGroup.controls["visao"].value,
      this.formGroup.controls["funcionario"].value,
    );

    this.service.insert(empresa).subscribe(
      result => {
        this.route.navigate(['/empresas']);
      }, err => {

      }
    );
  }
  onReset() {
    this.submitted = false;
    this.formGroup.reset();
  }

}
