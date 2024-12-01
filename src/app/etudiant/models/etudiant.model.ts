import { Genre } from "src/app/core/models/genre.model";

export interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    genre: 'M'| 'F';
    adresse:string;
    nomMere:string;
    telephoneMere:string;
    professionMere:string;
    nomPere:string;
    telephonePere:string;
    professionPere:string;
    nomTuteur:string;
    telephoneTuteur:string;
    professionTuteur:string;
    noteSupplementaire:string;
}