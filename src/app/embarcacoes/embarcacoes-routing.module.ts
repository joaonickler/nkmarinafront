import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmbarcacoesComponent } from './embarcacoes/embarcacoes.component';
import { EmbarcacoesFormComponent } from './embarcacoes-form/embarcacoes-form.component';

const routes: Routes = [
  {path :'', component: EmbarcacoesComponent},
  {path :'new', component: EmbarcacoesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbarcacoesRoutingModule { }
