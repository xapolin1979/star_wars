
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavesService {
  contador:number=1;
   private urlApi=`https://swapi.py4e.com/api/starships/?page=${this.contador}`;

  constructor(private http:HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  
 public pagina():void{
  
  this.contador++
  if(this.contador>4){
    this.contador=1;
  }
   this.urlApi = `https://swapi.py4e.com/api/starships/?page=${this.contador}`;
  }

  getPiloto(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  
  getPeliculas(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

}
