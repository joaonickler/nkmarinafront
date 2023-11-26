import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

////import { clienteResolver } from './guards/cliente.resolver';


import { AgendaFormComponent } from './containers/agenda-form/agenda-form/agenda-form.component';
import { AgendaComponent } from './containers/agenda/agenda/agenda.component';



const routes: Routes = [
  {path :'', component: AgendaComponent},
  { path: 'new', component: AgendaFormComponent, resolve: {age: agendaResolver}},
  {path :'edit/:id_cliente', component: AgendaFormComponent, resolve: {age:agendaResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
