import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { EmbarcacoesRoutingModule } from './embarcacoes-routing.module';
import { EmbarcacoesComponent } from './embarcacoes/embarcacoes.component';


@NgModule({
  declarations: [
    EmbarcacoesComponent
  ],
  imports: [
    CommonModule,
    EmbarcacoesRoutingModule,
    AppMaterialModule
  ]
})
export class EmbarcacoesModule { }
