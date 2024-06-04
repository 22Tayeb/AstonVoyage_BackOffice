import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../service/destination.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs';
import { Destination } from '../model/destination';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public destinationForm! : FormGroup 
  destination!: Destination;
  imageName: any;
  date_depart!:Date;
  date_retour!:Date;
public BACK_URL=environment
  constructor(private destinationService: DestinationService,
              private route: ActivatedRoute,
              private router:Router,
              private formBuilder : FormBuilder,
              private http: HttpClient){
  }
  ngOnInit(): void {
      const destinationId = this.route.snapshot.params['id'];
      this.destinationService.getDestinationById(destinationId)
      .pipe(
        delay(2000),
      )
      .subscribe(

        (response:any)=>{

          this.destination = response;
           this.imageName = this.destination.image
          this.destinationForm =this.formBuilder.group({
            nom_destination:[this.destination.nom_destination,Validators.required],
            description:[this.destination.description, Validators.required],
            prix:[this.destination.prix, Validators.required],
            date_depart:[new Date(this.destination.date_depart), Validators.required],
            date_retour: [new Date(this.destination.date_retour), Validators.required],
            compagnie_vol:[this.destination.vols.compagnie_vol, Validators.required],
            num_vol:[this.destination.vols.num_vol, Validators.required],
            aeroport_depart:[this.destination.vols.aeroport_depart, Validators.required],
            heure_depart:[this.destination.vols.heure_depart, Validators.required],
            aeroport_arrivee:[this.destination.vols.aeroport_arrivee, Validators.required],
            heure_arrivee:[this.destination.vols.heure_arrivee, Validators.required],
            duree_vol:[this.destination.vols.duree_vol, Validators.required],
            info_comp:[this.destination.vols.info_comp, Validators.required],
          })      
        }
      )
  }

  onFileChange(event: any) {
  const file = event.target.files[0];
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

  getImageUrl(filename: string): string {
    return this.BACK_URL.apiURL+ "/destination/download/"+filename;
  }

  onSubmit(id=""): void {
    console.log(this.destinationForm.value)
    const destination:Destination = {
      _id: this.destination._id,
     nom_destination: this.destinationForm.value.nom_destination,
     description: this.destinationForm.value.description,
     image: this.imageName,
     prix: this.destinationForm.value.prix,
     date_depart: this.destinationForm.value.date_depart,
     date_retour: this.destinationForm.value.date_retour,
     vols:{
      _id: this.destination.vols._id,
      compagnie_vol: this.destinationForm.value.compagnie_vol,
      num_vol: this.destinationForm.value.num_vol,
      aeroport_depart: this.destinationForm.value.aeroport_depart,
      heure_depart: this.destinationForm.value.heure_depart,
      aeroport_arrivee: this.destinationForm.value.aeroport_arrivee,
      heure_arrivee:this.destinationForm.value.heure_arrivee,
      duree_vol:this.destinationForm.value.duree_vol,
      info_comp:this.destinationForm.value.info_comp,
     }
 }
    if(this.destinationForm.valid||true){
      this.destinationService.edit(id, destination).subscribe(()=>{
        this.router.navigateByUrl('/home')
      })
    }
    
  }
}