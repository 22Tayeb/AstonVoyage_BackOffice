import { Component, OnInit } from '@angular/core';
import { Eleve} from '../model/eleve';
import { ElevesService } from '../service/eleves.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { specialites, classes } from './../model/eleve'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public eleveForm! : FormGroup 
  public specialites=specialites;
  public classes=classes;
  eleve!: Eleve;

  constructor(private elevesService : ElevesService,
              private route: ActivatedRoute,
              private formBuilder : FormBuilder){
  }
  ngOnInit(): void {
      const eleveId = +this.route.snapshot.params['id'];
      this.eleve = this.elevesService.getEleveById(eleveId)
      
      if(this.eleve){
        this.eleveForm =this.formBuilder.group({
          nom:[this.eleve.nom,Validators.required],
          prenom:[this.eleve.prenom],
          age:[this.eleve.age],
          classe:[this.eleve.classe],
          specialite:[this.eleve.specialite],
          redouble:[this.eleve.redouble]
        })      
      }
  }
}