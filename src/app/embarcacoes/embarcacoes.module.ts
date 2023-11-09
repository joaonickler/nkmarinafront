import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { EmbarcacoesFormComponent } from './embarcacoes-form/embarcacoes-form.component';
import { EmbarcacoesRoutingModule } from './embarcacoes-routing.module';
import { EmbarcacoesComponent } from './embarcacoes/embarcacoes.component';


@NgModule({
  declarations: [
    EmbarcacoesComponent,
    EmbarcacoesFormComponent
  ],
  imports: [
    CommonModule,
    EmbarcacoesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EmbarcacoesModule { }
