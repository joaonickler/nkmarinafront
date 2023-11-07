import { Component, OnInit } from '@angular/core';
import { Embarcacao } from '../model/embarcacao';
import { EmbarcacoesService } from '../services/embarcacoes.service';
import { Observable, catchError, of } from 'rxjs';


@Component({
  selector: 'app-embarcacoes',
  templateUrl: './embarcacoes.component.html',
  styleUrls: ['./embarcacoes.component.scss']
})

export class EmbarcacoesComponent   implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  embarcacao  : Observable<Embarcacao[]>;
  displayedColumns = [ 'id', 'nm_embarc', 'tipo', 'nr_marina', 'dh_registro', 'id_situacao' ];

  constructor(private embarcacaoService: EmbarcacoesService ){
    this.embarcacao = this.embarcacaoService.list()
    .pipe(
      catchError(error => {
        console.log()
        return of([])
      })
    );



  }


}



