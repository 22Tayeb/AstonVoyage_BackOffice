import { SelectOptionHtmlElement } from "./form-elements";

export interface Eleve{
    id? : number,
    nom : string,
    prenom: string,
    age: number,
    classe: string,
    specialite: string,
    redouble: boolean,
}

export enum Specialite{
    ARTS = 'Arts',
    TECHNOLOGIE = 'Technologie',
    SCIENCES = 'Sciences',
    LANGUE = 'Langue',
    MUSIQUE = 'Musique',
    SPORTS = 'Sports'
}

export enum Classes{
    SIXIEME = '6ème',
    CINQUIEME = "5ème",
    QUATRIEME = "4ème",
    TROISIEME = "3ème"
}

// export const enum EleveDisplayedColumns {
//     NOM = 'nom',
//     PRENOM = 'prenom',
//     AGE = 'age',
//     CLASSE = 'classe',
//     SPECIALITE = 'specialite',
//     REDOUBLER = 'redoubler',
//     EDITER = 'editer',
//     SUPPRIME = 'supprime'
// };



export const specialites: SelectOptionHtmlElement[] = [
    {value: Specialite.ARTS, viewValue: Specialite.ARTS},
    {value: Specialite.LANGUE, viewValue: Specialite.LANGUE},
    {value: Specialite.MUSIQUE, viewValue: Specialite.MUSIQUE},
    {value: Specialite.SCIENCES, viewValue: Specialite.SCIENCES},
    {value: Specialite.SPORTS, viewValue: Specialite.SPORTS},
    {value: Specialite.TECHNOLOGIE, viewValue: Specialite.TECHNOLOGIE},
  ];
export const classes: SelectOptionHtmlElement[] = [
    {value: Classes.SIXIEME, viewValue: Classes.SIXIEME},
    {value: Classes.CINQUIEME, viewValue: Classes.CINQUIEME},
    {value: Classes.QUATRIEME, viewValue: Classes.QUATRIEME},
    {value: Classes.TROISIEME, viewValue: Classes.TROISIEME},
  ];
