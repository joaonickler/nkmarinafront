import { Component, OnInit } from '@angular/core';
import { Embarcacoes } from '../model/embarcacoes';
import { EmbarcacoesService } from '../services/embarcacoes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-embarcacoes',
  templateUrl: './embarcacoes.component.html',
  styleUrls: ['./embarcacoes.component.scss']
})

export class EmbarcacoesComponent   implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  embarcacoes$ : Observable<Embarcacoes[]>;
  displayedColumns = ['name', 'category'];


  constructor(private embarcacoesService: EmbarcacoesService){
    this.embarcacoes$ = this.embarcacoesService.list();

  }

}
