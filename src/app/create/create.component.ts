import { Component, OnInit } from '@angular/core';
import { Destination } from '../model/destination';
import { DestinationService } from '../service/destination.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  public destinationForm! : FormGroup 
  destination!: Destination;
  imageUrl:any

  constructor(private destinationService: DestinationService,
              private formBuilder: FormBuilder,
              private router: Router,
              private http: HttpClient) {
  }
  ngOnInit(): void {
      this.destinationService.getDestination() .subscribe(
        (response:any)=>{
          this.destination =  response;
          this.destinationForm =this.formBuilder.group({
            nom_destination:[null,Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
            description:[null,Validators.required],
            image:[null, Validators.required],
            compagnie_vol:[null, Validators.required],
            num_vol:[null, Validators.required],
            heure_depart:[null, Validators.required],
            heure_arrivee:[null, Validators.required]
          })      
        }
      )
  }


onFileChange(event: any) {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('file', file);

  this.http.post('http://localhost:3000/api/destination/upload', formData)
    .subscribe((res:any) => {
      console.log(res)
      this.imageUrl = res.url;
    },
    (error) => {
      console.log(error)
    });
}


  created(): void {
    
    const destination:Destination = {
     nom_destination: this.destinationForm.value.nom_destination,
     description: this.destinationForm.value.description,
     image: this.imageUrl,
     vols:{
      compagnie_vol: this.destinationForm.value.compagnie_vol,
      num_vol: this.destinationForm.value.num_vol,
      heure_depart: this.destinationForm.value.heure_depart,
      heure_arrivee:this.destinationForm.value.heure_arrivee,
     }
 }


    this.destinationService.create(destination).subscribe(
      ()=>{
        this.router.navigateByUrl("/home")
      }
    )
  }
}



