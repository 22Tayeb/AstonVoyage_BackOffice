import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElevesService } from '../service/eleves.service';
import { Eleve } from '../model/eleve';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
})
export class ConnexionComponent implements OnInit{
  eleves!: Eleve[];
  user = {username:'toto@gmail.com', password:'totocode'}

  public loginForm! : FormGroup;

  constructor(private formBuilder : FormBuilder,
              private eleveService: ElevesService){}

ngOnInit(): void{ 
this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required,Validators.email]],
      password: [null,[ Validators.required,Validators.minLength(8),]]
  })

}

  onSubmitForm(){
    if(this.loginForm.valid === true && this.user.username === this.loginForm.get('username')?.value && this.user.password ===this.loginForm.get("password")?.value){
       console.log(this.loginForm)
    }else{
      alert("erreur : Remplir les champs requis")
    }
  }
}
