import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Eleve } from '../model/eleve';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { admin } from '../model/admin';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls:['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
  eleves!: Eleve[];
  user = {username:'toto@gmail.com', password:'totocode'}
  public loginForm! : FormGroup;
  admin!:admin
  
  constructor(private formBuilder : FormBuilder,
              private authService : AuthService,
              private router : Router,
              private adminService:AdminService,
               ){}


  ngOnInit(): void{ 
  this.loginForm = this.formBuilder.group({
        username: ["", [Validators.required,Validators.email]],
        password: ["",[ Validators.required]]
    })
  }
  
  login(){
    
    this.adminService.login(this.loginForm.value).subscribe(
      (reponse:any)=>{
        this.authService.login()
              this.router.navigate(['/home'])
        localStorage.setItem('accessToken', reponse.accessToken)
        localStorage.setItem('refreshToken',reponse.refreshToken)
        console.log(reponse)
        localStorage.setItem('user_id',reponse.admin._id)
        
      },
      ()=> {
        alert('mail ou mot de passe incorrect',)

      }
    )
   
    
  }

}

