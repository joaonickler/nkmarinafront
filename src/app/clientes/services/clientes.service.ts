import { Cliente } from './../model/clientes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private HttpClient:HttpClient  ) { }

    private readonly API = 'api/clientes'

  list() {
    return this.HttpClient.get<Cliente[]>(this.API)
    .pipe(
      first(),
      tap(cliente=>console.log(cliente))
    );
  }

  save(record: Partial<Cliente>)
  {
    console.log(record);

    if (record.id_cliente) {
      return this.update(record);
    }
      return this.create(record);

  }

  loadById(id_cliente: string ){
    return this.HttpClient.get<Cliente>(`${this.API}/${id_cliente}`);
  }

  private create(record: Partial<Cliente>){
    return this.HttpClient.post<Cliente>(this.API,record);
  }

  private update(record: Partial<Cliente>){
     return this.HttpClient.post<Cliente>(this.API,record);
    }



  remove(id_cliente: string){
    return this.HttpClient.delete(`${this.API}/${id_cliente}`);
   }

}

