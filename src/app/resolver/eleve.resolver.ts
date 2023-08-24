import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ElevesService } from '../service/eleves.service';

@Injectable({
  providedIn: 'root'
})
export class EleveResolver implements Resolve<Observable<any>> {

  constructor(private elevesService: ElevesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.elevesService.getEleve();
  }
}