import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaComponent } from './containers/agenda/agenda/agenda.component';
import { AgendaFormComponent } from './containers/agenda-form/agenda-form/agenda-form.component';



@NgModule({
  declarations: [
    AgendaListComponent,
    AgendaComponent,
    AgendaFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgendaModule { }
