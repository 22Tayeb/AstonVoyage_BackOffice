import { Vol } from "./vols";

export interface Destination {
    _id?: string;
    nom_destination: string;
    description: string;
    image: string;
    prix: string;
    date_depart: Date;
    date_retour: Date;
    vols: Vol;
}

export const enum DestinationDisplayedColumns {
    NOM_DESTINATION = 'nom_destination',
    DESCRIPTION = 'description',
    IMAGE = 'image',
    PRIX = 'prix',
    DATE_DEPART = 'date_depart',
    DATE_RETOUR = 'date_retour',
    COMPAGNIE_VOL = 'compagnie_vol',
    NUM_VOL = 'num_vol',
    AEROPORT_DEPART = 'aeroport_depart', 
    HEURE_DEPART = 'heure_depart',
    HEURE_ARRIVEE = 'heure_arrivee',
    AEROPORT_ARRIVEE = 'aeroport_arrivee',
    DUREE_VOL = 'duree_vol',
    INFO_COMP = 'info_comp',
    EDITER = 'editer',
    SUPPRIME = 'supprime'
};