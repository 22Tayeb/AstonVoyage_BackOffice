import { Injectable } from '@angular/core';
import { admin } from '../model/admin';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';


@Injectable({
    providedIn: 'root'
  })
  export class AdminService{
    private BACK_URL = environment.apiURL;
    constructor(private http:HttpClient){}
    login(admin:any){
        return this.http.post(this.BACK_URL+'/admin/authenticateAdmin', admin)
    }
    logout(admin:any){
      return this.http.post(this.BACK_URL+'/admin/logoutAdmin',admin)
    }
    
  }