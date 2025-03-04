import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SerproService {
  private apiUrl = 'https://gateway.apiserpro.serpro.gov.br/integra-contador-trial/v1';

  token = '06aef429-a981-3ec5-a1f8-71d38d86481e';

  constructor(private http: HttpClient) { }

  // metodo emitir
  emitirRelatorio(data: any): Observable<any> {
    const url = `${this.apiUrl}/Emitir`;
    return this.http.post(url, data, { headers: this.getHeaders() });
  }

  // Metodo para consultar situação
  consultarSituacao(dados: any): Observable<any> {
    const url = `${this.apiUrl}/Consultar`;
    return this.http.post(url, dados, { headers: this.getHeaders() });
  }
  //metodo para configurar os Headers
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-api-key': this.token,
      'Content-Type': 'application/json',
    });
  }
}




