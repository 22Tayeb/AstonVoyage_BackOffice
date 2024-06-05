import { Component, OnInit } from '@angular/core';
import { Destination } from '../model/destination';
import { DestinationService } from '../service/destination.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  public destinationForm! : FormGroup 
  destination!: Destination;
  imageName:any
  date_depart!:Date;
  date_retour!:Date;
public BACK_URL=environment
  constructor(private destinationService: DestinationService,
              private formBuilder: FormBuilder,
              private router: Router,
              private http: HttpClient) {
  }
  ngOnInit(): void {
      this.destinationService.getDestination().subscribe(
        (response:any)=>{
          this.destination =  response;
          this.destinationForm =this.formBuilder.group({
            nom_destination:[null,Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
            description:[null,Validators.required],
            image:[null, Validators.required],
            prix:[null, Validators.required],
            date_depart:[null, Validators.required],
            date_retour:[null,Validators.required],
            compagnie_vol:[null, Validators.required],
            num_vol:[null, Validators.required],
            aeroport_depart:[null, Validators.required],
            heure_depart:[null, Validators.required],
            aeroport_arrivee:[null, Validators.required],
            heure_arrivee:[null, Validators.required],
            duree_vol:[null, Validators.required],
            info_comp:[null, Validators.required],
          })      
        }
      )
  }


onFileChange(event: any) {
  const file = event.target.files[0];
  if (file) {
    const validTypes = ['image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      alert('Type de fichier non valide. Veuillez sélectionner une image JPEG ou PNG.');
      return;
    }
  const formData = new FormData();
  formData.append('file', file);

  this.http.post(this.BACK_URL.apiURL+'/destination/upload', formData)
    .subscribe((res:any) => {
      console.log(res)
      this.imageName = res.file;
    },
    (error) => {
      console.log(error)
    });
}
}


  created(): void {
    
    const destination:Destination = {
     nom_destination: this.destinationForm.value.nom_destination,
     description: this.destinationForm.value.description,
     image: this.imageName,
     prix: this.destinationForm.value.prix, 
     date_depart: this.destinationForm.value.date_depart,
     date_retour: this.destinationForm.value.date_retour,
     vols:{
      compagnie_vol: this.destinationForm.value.compagnie_vol,
      num_vol: this.destinationForm.value.num_vol,
      aeroport_depart: this.destinationForm.value.aeroport_depart,
      heure_depart: this.destinationForm.value.heure_depart,
      aeroport_arrivee: this.destinationForm.value.aeroport_arrivee,
      heure_arrivee:this.destinationForm.value.heure_arrivee,
      duree_vol: this.destinationForm.value.duree_vol,
      info_comp: this.destinationForm.value.info_comp,
     }
 }


    this.destinationService.create(destination).subscribe(
      ()=>{
        this.router.navigateByUrl("/home")
      },
      ()=> {
        alert('Creation impossible erreur serveur')
      }
    )
  }
}



