import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { RouterModule } from '@angular/router';
import { EmpresasRoutingModule } from './empresa-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresaService } from './service/empresa.service';
import { EmpresamockService } from './service/empresamock.service';



@NgModule({
  declarations: [EmpresaListComponent],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: EmpresaService,
      useClass: EmpresamockService
    }
  ]
})
export class EmpresasModule { }
