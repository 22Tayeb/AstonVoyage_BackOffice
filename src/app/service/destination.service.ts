import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Destination } from '../model/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private BACK_URL = 'http://localhost:3000/api/destination';

  constructor(private http : HttpClient) { }

  getDestination(): Observable<Destination[]> {
  return this.http.get<Destination[]>(this.BACK_URL+'/getAllDest')
  }


  getDestinationById(id:string):any {
    return this.http.get(this.BACK_URL+'/getDest/'+id)
  }

  create(destination: any) {
     return this.http.post(this.BACK_URL+'/createDest', destination)
  }

  edit(id:string, destination:Destination):Observable<any> {
    return this.http.put(this.BACK_URL+'/updateDest/'+id,destination)
  } 

  delete(id : string): Observable<{message:string}> {
    return this.http.delete(this.BACK_URL+'/deleteDest/'+id) as Observable<{message:string}>
  }
}

