import { Agenda } from './../model/agenda';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private HttpClient:HttpClient ) { }

  private readonly API = 'api/agenda'

  list() {
    return this.HttpClient.get<Agenda[]>(this.API)
    .pipe(
      first(),
      tap(agenda=>console.log(agenda))
    );
  }


  save(record: Partial<Agenda>)
  {
    console.log(record);
    if (record.id_agenda) {
      return this.update(record);
    }
      return this.create(record);

  }


  loadById(id_agenda: string ){
    return this.HttpClient.get<Agenda>(`${this.API}/${id_agenda}`);
  }

  private create(record: Partial<Agenda>){
    return this.HttpClient.post<Agenda>(this.API,record);
  }

  private update(record: Partial<Agenda>){
     return this.HttpClient.post<Agenda>(this.API,record);
    }



  remove(id_cliente: string){
    return this.HttpClient.delete(`${this.API}/${id_cliente}`);
   }




}
