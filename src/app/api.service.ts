import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ApiResult {
  result: number;
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.mathjs.org/v4/';

  constructor(private http: HttpClient) { }

  sumar(a: number, b: number): Observable<ApiResult> {
    
    var url = this.apiUrl + 'evaluate';
    const body = { expr: a.toString() + '+' + b.toString()}
    return this.http.post(url, body).pipe(
      map((res: Object) => res as ApiResult)
    );
  }

  restar(a: number, b: number): Observable<ApiResult> {
   
    var url = this.apiUrl + 'evaluate';
    const body = { expr: a.toString() + '-' + b.toString()}
    return this.http.post(url, body).pipe(
      map((res: Object) => res as ApiResult)
    );
  }

  multiplicar(a: number, b: number): Observable<ApiResult> {
   
    var url = this.apiUrl + 'evaluate';
    const body = { expr: a.toString() + '*' + b.toString()}
    return this.http.post(url, body).pipe(
      map((res: Object) => res as ApiResult)
    );
  }

  dividir(a: number, b: number): Observable<ApiResult> {
    
    var url = this.apiUrl + 'evaluate';
    const body = { expr: a.toString() + '/' + b.toString()};
    return this.http.post(url, body).pipe(
      map((res: Object) => res as ApiResult)
    );
  }
}
