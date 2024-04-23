import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { DestinationService } from '../service/destination.service';
import { LoaderService } from '../service/loader.servive';


@Injectable({
  providedIn: 'root'
})
export class DestinationResolver implements Resolve<Observable<any>> {

  constructor(private destinationService:DestinationService, private loaderService:LoaderService) {}

  resolve(): Observable<any> {
    this.loaderService.setLoading(true)
    return this.destinationService.getDestination()
    .pipe(
      tap(res => {
         setTimeout(() => { this.loaderService.setLoading(false)},2000) 
        }) 
    );
  }
}