import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Eleve } from '../model/eleve';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
})
export class ConnexionComponent implements OnInit{
  eleves!: Eleve[];
  user = {username:'toto@gmail.com', password:'totocode'}
  public loginForm! : FormGroup;
  
  constructor(private formBuilder : FormBuilder,
              private authService : AuthService,
              private router : Router ){}


  ngOnInit(): void{ 
  this.loginForm = this.formBuilder.group({
        username: [null, [Validators.required,Validators.email]],
        password: [null,[ Validators.required,Validators.minLength(8),]]
    })
  }
  
  login(){
    this.authService.login()
    this.router.navigateByUrl("/home")
    
  }
}
