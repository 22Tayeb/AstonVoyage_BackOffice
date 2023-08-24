import { Injectable } from '@angular/core';
import { Eleve } from '../model/eleve';
import { HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  private LOCAL_URL = 'assets/eleves.json';
  private BACK_URL = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  getEleve(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.BACK_URL+'/eleves')
  }

  getEleveById(id:number):any {
    return this.http.get(this.BACK_URL+'/eleves/'+id)
  }

  create(eleve: any) {
     return this.http.post(this.BACK_URL+'/eleves', eleve)
  }

  edit(id:number, eleve:Eleve):Observable<any> {
    return this.http.put(this.BACK_URL+'/eleves/'+id,eleve)
  } 

  delete(id : number): Observable<{message:string}> {
    return this.http.delete(this.BACK_URL+'/eleves/'+id) as Observable<{message:string}>
  }
}

