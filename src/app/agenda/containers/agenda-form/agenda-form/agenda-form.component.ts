import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Agenda } from 'src/app/agenda/model/agenda';
import { AgendaService } from 'src/app/agenda/service/agenda.service';
import { FormUtilsService } from 'src/app/shared/form/form-utils.service';
import { Embarcacao } from 'src/app/agenda/model/embarcacao_age';


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
        embarcacao: this.formBuilder.array(this.retrieveEmbarcacacoes(age), Validators.required)
    })
  }


  private retrieveEmbarcacacoes(age: Agenda)  {
    const embarc = [];
    if (age.embarcacao) {
      age.embarcacao.forEach(embarcacao => embarc.push(this.createEmbarcacao(embarcacao)));
    } else {
      embarc.push(this.createEmbarcacao());
    }
    return embarc;
  }

  getEmbarcacoesFormArray() {
    return (<UntypedFormArray>this.form.get('embarcacoes')).controls;
  }

  // Nova embarcacao
  addNewEmbarcacao(){
    const embarcacoes = this.form.get('embarcacoes') as UntypedFormArray;
    embarcacoes.push(this.createEmbarcacao());
  }


  private createEmbarcacao(embarcacao : Embarcacao = {id_embarc:'', nm_embarc:'', nrmarinha_embarc:'' , tipo_embarc:'',}){
      return this.formBuilder.group({
        id_embarc:[embarcacao.id_embarc],
        nm_embarc:[embarcacao.nm_embarc, Validators.required],
        nrmarinha_embarc:[embarcacao.nrmarinha_embarc, Validators.required],
        tipo_embarc:[embarcacao.tipo_embarc, Validators.required]

      });
  }


  removeEmbarcacao(index: number ){
    const embarcacoes = this.form.get('embarcacao') as UntypedFormArray;
    console.log(embarcacoes);
    embarcacoes.removeAt(index);


  }


  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value)
        .subscribe(result => this.OnSucess(), error => this.OnError());
    } else {
      this.formUtils.validateAllFormFields(this.form);
    }
  }


  onCancel(){
    this.location.back();
  }


  private OnSucess(){
    this.snackBar.open('Agendamento Salvo com Sucesso!', '', {duration:4000});
    this.onCancel();
  }

  private OnError(){
    this.snackBar.open('Erro ao Salvar Agendamento!', '', {duration:4000});
  }











}
