import { Vol } from "./vols";

export interface Destination {
    _id?: string;
    nom_destination: string;
    description: string;
    image: string;
    vols: Vol;
}

export const enum DestinationDisplayedColumns {
    NOM_DESTINATION = 'nom_destination',
    DESCRIPTION = 'description',
    IMAGE = 'image',
    COMPAGNIE_VOL = 'compagnie_vol',
    NUM_VOL = 'num_vol',
    AEROPORT_DEPART = 'aeroport_depart', 
    HEURE_DEPART = 'heure_depart',
    HEURE_ARRIVEE = 'heure_arrivee',
    AEROPORT_ARRIVEE = 'aeroport_arrivee',
    EDITER = 'editer',
    SUPPRIME = 'supprime'
};