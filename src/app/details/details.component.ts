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
          nom:[this.eleve.nom,Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
          prenom:[this.eleve.prenom, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
          age:[this.eleve.age, Validators.required],
          classe:[this.eleve.classe, Validators.required],
          specialite:[this.eleve.specialite, Validators.required],
          redouble:[this.eleve.redouble]
        })      
      }
  }

  onSubmit(): void {
    if(this.eleveForm.valid){
      console.log(this.eleveForm.value)
    }
    
  }
}