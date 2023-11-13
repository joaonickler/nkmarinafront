import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Embarcacao } from '../model/embarcacao';
import {  first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmbarcacoesService {

  constructor(private HttpClient:HttpClient  ) { }

   ///private readonly API = 'assets/embarcacao.json'
   private readonly API = 'api/embarcacoes'

  list() {
    return this.HttpClient.get<Embarcacao[]>(this.API)
    .pipe(
      first(),
      tap(embarcacao=>console.log(embarcacao))
    );
  }

  save(record: Partial<Embarcacao>)
  {
    console.log(record);
    ///return this.HttpClient.post<Embarcacao>(this.API,  record);
    if (record.id) {
      console.log('ALTERACAO');
      return this.update(record);
    }
      console.log('CRIACAO');
      return this.create(record);

  }

  // Localiza por ID
  loadById(id: String ){
    return this.HttpClient.get<Embarcacao>(`${this.API}/${id}`);
  }

  // Cria um novo
  private create(record: Partial<Embarcacao>){
    return this.HttpClient.post<Embarcacao>(this.API,  record);
  }

  // Altera um existente
  private update(record: Partial<Embarcacao>){
     return this.HttpClient.post<Embarcacao>(this.API,  record);
    }

  private delete(id:String){
    return this.HttpClient.delete<Embarcacao>(`${this.API}/${id}`);
  }


}



////return this.HttpClient.put<Embarcacao>(`${this.API}/${record.id}`,record);
