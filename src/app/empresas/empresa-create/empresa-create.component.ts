import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpresaService } from '../service/empresa.service';
import { Router } from '@angular/router';
import { EmpresasModule } from '../empresas.module';
import { EmpresaDTOModule } from '../models/empresa-dto.module';

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {

  private formGroup: FormGroup;
  private submitted: boolean = false;

  constructor(private service: EmpresaService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.generateForm();
  }

  get form() {
    return this.formGroup.controls;
  }

  generateForm() {
    this.formGroup = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }

    const user: EmpresaDTOModule = new EmpresaDTOModule(
      null,
      this.formGroup.controls["cnpj"].value,
      this.formGroup.controls["nomeFantasia"].value,
      this.formGroup.controls["razaoSocial"].value,
      this.formGroup.controls["misao"].value,
      this.formGroup.controls["visao"].value,
      this.formGroup.controls["funcionario"].value,
    );

    this.service.insert(user).subscribe(
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
