import { Injectable } from '@angular/core';
import { Eleve } from '../model/eleve';
import { HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  eleves!: Eleve[] 
  private URL = 'assets/eleves.json';
  constructor(private http : HttpClient) { }

  getEleve(): Observable<{eleves:Eleve[]}>{
    return this.http.get<{eleves:Eleve[]}>(this.URL)
    .pipe(
      tap((response) => this.eleves = response.eleves)
    )
  }

  getEleveById(id:number):any{
  if(this.eleves.length > 0){
      const eleve = this.eleves.find(e => e.id === id);
      return eleve ? eleve : undefined
    }
  }
}
