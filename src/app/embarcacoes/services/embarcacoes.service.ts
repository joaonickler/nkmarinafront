import { Embarcacoes } from './../model/embarcacoes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmbarcacoesService {

  private readonly API = 'assets/embarcacoes.json'

  constructor(private httpClient: HttpClient) { }


  list() {
       return this.httpClient.get<Embarcacoes[]>(this.API)

  }

}
