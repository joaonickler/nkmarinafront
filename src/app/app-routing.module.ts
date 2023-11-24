import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {  path: '', pathMatch: 'full',   redirectTo : 'home'},
  {  path: 'clientes',loadChildren: () => import('./clientes/clientes.module').then(m=>m.ClientesModule) }
];


///const routes: Routes = [
  //{/  path: '', pathMatch: 'full',   redirectTo : 'clientes'},
  ///{  path: 'clientes',loadChildren: () => import('./clientes/clientes.module').then(m=>m.ClientesModule) }
///];

///const routes: Routes = [
//  {  path: '', pathMatch: 'full',   redirectTo : 'embarcacoes'},
//  {  path: 'embarcacoes',
     //loadChildren: () => import('./embarcacoes/embarcacoes.module').then(m=>m.EmbarcacoesModule)
  //}
//];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }



