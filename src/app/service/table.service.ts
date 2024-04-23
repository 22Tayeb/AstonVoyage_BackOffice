import { Injectable } from '@angular/core';
import { DestinationDisplayedColumns } from '../model/destination';


@Injectable({
  providedIn: 'root'
})
export class TableService {

getDisplayColumn(role?:string) {
    //if(role === Role.ELEVE) {
        return [
            DestinationDisplayedColumns.NOM_DESTINATION,
            DestinationDisplayedColumns.DESCRIPTION,
            DestinationDisplayedColumns.IMAGE,
            DestinationDisplayedColumns.COMPAGNIE_VOL,
            DestinationDisplayedColumns.NUM_VOL,
            DestinationDisplayedColumns.AEROPORT_DEPART,
            DestinationDisplayedColumns.HEURE_DEPART,
            DestinationDisplayedColumns.AEROPORT_ARRIVEE,
            DestinationDisplayedColumns.HEURE_ARRIVEE,
            DestinationDisplayedColumns.EDITER,
            DestinationDisplayedColumns.SUPPRIME
          ]
    //}
    // CODE EVOLUTIF
    return []
  }
}