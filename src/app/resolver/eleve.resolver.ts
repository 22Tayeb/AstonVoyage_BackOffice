import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ElevesService } from '../service/eleves.service';
import { LoaderService } from '../service/loader.servive';


@Injectable({
  providedIn: 'root'
})
export class EleveResolver implements Resolve<Observable<any>> {

  constructor(private elevesService:ElevesService,private loaderService:LoaderService) {}

  resolve(): Observable<any> {
    this.loaderService.setLoading(true)
    return this.elevesService.getEleve()
    .pipe(
      tap(res => {
         setTimeout(() => { this.loaderService.setLoading(false)},2000) 
        }) 
    );
  }
}