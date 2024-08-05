import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
//import { get } from 'http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interface/Lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  // metodo get que retorna um lista de lenbrete 
  getListarLembretes(): Observable<Lembrete[]>{
    // a url recebe a contante environment onde definimos a URL da API
    const url =`${environment.lembretesApiUrl}/lembrete`;
    return this.http.get<Lembrete[]>(url);
  }

  getLembretes(id: number): Observable<Lembrete>{
    // a url recebe a contante environment onde definimos a URL da API
    const url =`${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }

  addLembretes(lembrete: Lembrete): Observable<Lembrete>{
    // a url recebe a contante environment onde definimos a URL da API
    const url =`${environment.lembretesApiUrl}/lembrete/`;
    return this.http.post<Lembrete>(url,lembrete);
  }

  atualizaLembretes(lembrete: Lembrete): Observable<Lembrete>{
    // a url recebe a contante environment onde definimos a URL da API
    const url =`${environment.lembretesApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url,lembrete);
  }

  deletaLembretes(id: number): Observable<Lembrete>{
    // a url recebe a contante environment onde definimos a URL da API
    const url =`${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

}
