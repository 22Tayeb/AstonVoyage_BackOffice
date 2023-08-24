import { Injectable } from '@angular/core';
import { EleveDisplayedColumns } from '../model/eleve';
import { Role } from '../model/table';


@Injectable({
  providedIn: 'root'
})
export class TableService {

getDisplayColumn(role:string) {
    if(role === Role.ELEVE) {
        return [
            EleveDisplayedColumns.NOM,
            EleveDisplayedColumns.PRENOM,
            EleveDisplayedColumns.AGE,
            EleveDisplayedColumns.CLASSE,
            EleveDisplayedColumns.SPECIALITE,
            EleveDisplayedColumns.REDOUBLER,
            EleveDisplayedColumns.EDITER,
            EleveDisplayedColumns.SUPPRIME
          ]
    }
    // CODE EVOLUTIF
    return []
  }
}