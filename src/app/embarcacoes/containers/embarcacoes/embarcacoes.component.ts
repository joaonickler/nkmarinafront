import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Embarcacao } from '../../model/embarcacao';
import { EmbarcacoesService } from '../../services/embarcacoes.service';


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

  constructor(private embarcacaoService: EmbarcacoesService,
              private router: Router,
              private route: ActivatedRoute ){
      this.embarcacao = this.embarcacaoService.list()
    .pipe(
      catchError(error => {
        console.log()
        return of([])
      })
    );

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  onEdit(embarcacao: Embarcacao ){
    this.router.navigate(['edit', embarcacao.id], {relativeTo:this.route});
  }

  onDelete(embarcacao: Embarcacao ){
    this.router.navigate(['delete', embarcacao.id], {relativeTo:this.route});
  }

}



