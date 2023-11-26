import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaComponent } from './containers/agenda/agenda/agenda.component';
import { AgendaFormComponent } from './containers/agenda-form/agenda-form/agenda-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AgendaListComponent,
    AgendaComponent,
    AgendaFormComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AgendaModule { }
