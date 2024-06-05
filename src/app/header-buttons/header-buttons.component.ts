import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { FormGroup } from '@angular/forms';
import { admin } from '../model/admin';
@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.css']
})
export class HeaderButtonsComponent {
  isConnected:any;
  mail!:string |null;
  admin!:admin
 
  
  
  constructor(public router: Router,
              private adminService:AdminService) {
  }
  deconnexion(): void {
    this.adminService.logout(this.admin).subscribe(
      (succes:any) => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    this.router.navigate(['']);

      },
      (err)=> {
        console.log(err)
        alert(err.error.message)
        

      }
    )
    
  }
}
