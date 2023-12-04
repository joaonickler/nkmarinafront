import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Agenda } from 'src/app/agenda/model/agenda';
import { AgendaService } from 'src/app/agenda/service/agenda.service';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';


@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: ['./agenda-form.component.scss']
})
export class AgendaFormComponent {

  form!: FormGroup;


  constructor(  private formBuilder: UntypedFormBuilder,
                private service: AgendaService,
                private snackBar: MatSnackBar,
                private location: Location,
                private route:ActivatedRoute,
                public formUtils: FormUtilsService
                ){
  }

  ngOnInit():void{
    const age: Agenda = this.route.snapshot.data['age'];
    this.form = this.formBuilder.group({
        id_agenda: [age.id_agenda],
        dh_cadastro_agenda: [age.dh_cadastro_agenda],
        dh_solicit_agenda: [age.dh_solicit_agenda, Validators.required ],
        situacao_agenda : [age.situacao_agenda, Validators.required ],
        embarcacoes: this.formBuilder.array([], Validators.required),
        clientes : this.formBuilder.array([], Validators.required)
    })
  }



















}
