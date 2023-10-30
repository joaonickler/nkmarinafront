import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmbarcacoesComponent } from './embarcacoes/embarcacoes.component';

const routes: Routes = [
  {path :'', component: EmbarcacoesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbarcacoesRoutingModule { }
