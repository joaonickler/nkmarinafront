import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Embarcacao } from '../model/embarcacao';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmbarcacoesService {

  constructor(private HttpClient:HttpClient  ) { }

   private readonly API = 'assets/embarcacao.json'

  list() {
    return this.HttpClient.get<Embarcacao[]>(this.API)
    .pipe(
      first(),
      tap(embarcacao=>console.log(embarcacao))
    );
  }

}
