import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { EmbarcacoesService } from '../../services/embarcacoes.service';
import { Embarcacao } from '../../model/embarcacao';

@Component({
  selector: 'app-embarcacoes-form',
  templateUrl: './embarcacoes-form.component.html',
  styleUrls: ['./embarcacoes-form.component.scss']
})
export class EmbarcacoesFormComponent {

  form: FormGroup;

  constructor(
              private formBuilder: UntypedFormBuilder,
              private service: EmbarcacoesService,
              private snackBar: MatSnackBar,
              private location: Location,
              private route:ActivatedRoute )
  {
              this.form = this.formBuilder.group(
                  { id: [''], nm_embarc:[''], tipo:[null],id_situacao:['']});
  }

  ngOnInit():void {
    const embarc: Embarcacao = this.route.snapshot.data['embar'];
    console.log(embarc);
    this.form.setValue(
      {
        id: embarc.id,
        nm_embarc: embarc.nm_embarc,
        tipo: embarc.tipo,
        id_situacao: embarc.id_situacao
      });

  }

  onSubmit(){
    this.service.save(this.form.value)
     .subscribe( result => this.OnSucess(),  error => this.OnError());
  }

  onCancel(){
    this.location.back();
  }


  private OnError(){
    this.snackBar.open('Erro ao Salvar Embarcação!', '',  {duration: 5000});
  }

  private OnSucess(){
    this.snackBar.open('Embarcação Salva Com Sucesso!', '',  {duration: 5000});
    this.onCancel();
  }

}



