import { Component, OnInit } from '@angular/core';
import { Eleve} from '../model/eleve';
import { ElevesService } from '../service/eleves.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { specialites, classes } from './../model/eleve'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  public eleveForm! : FormGroup 
  public specialites=specialites;
  public classes=classes;
  eleve!: Eleve;

  constructor(private elevesService: ElevesService,
              private formBuilder: FormBuilder,
              private router: Router ){
  }
  ngOnInit(): void {
      this.elevesService.getEleve() .subscribe(
        (response:any)=>{
          this.eleve =  response;
          this.eleveForm =this.formBuilder.group({
            nom:[null,Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
            prenom:[null,Validators.required],
            age:[null,Validators.required],
            classe:[null,Validators.required],
            specialite:[null,Validators.required],
            redouble:[null]
          })      
        }
      )
  }

  created(): void {
    this.elevesService.create(this.eleveForm.value).subscribe(
      ()=>{
        this.router.navigateByUrl("/home")
      }
    )
  }
}

