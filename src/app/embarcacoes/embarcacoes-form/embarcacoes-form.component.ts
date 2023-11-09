import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EmbarcacoesService } from '../services/embarcacoes.service';

@Component({
  selector: 'app-embarcacoes-form',
  templateUrl: './embarcacoes-form.component.html',
  styleUrls: ['./embarcacoes-form.component.scss']
})
export class EmbarcacoesFormComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: EmbarcacoesService,
    private _snackBar: MatSnackBar
    )
  {
    this.form = this.formBuilder.group(
     {
      nm_embarc:[null],
      nr_marina:[null],
      tipo:[null],
      id_situacao:[null],
      dt_cadastro:[null]
      }
    );

  }

  ngOnInit():void {

  }

  onSubmit(){
    this.service.save(this.form.value)
     .subscribe( result => console.log(result),
                 error => {this._snackBar.open('Erro ao Salvar Embarcação'), '', {duration: 5000}}
                );
  }

  onCancel(){


  }



}



//this.service.save(this.form.value);
