import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../service/destination.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs';
import { Destination } from '../model/destination';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public destinationForm! : FormGroup 
  destination!: Destination;
  imageUrl: any;

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
           this.imageUrl = this.destination.image
          this.destinationForm =this.formBuilder.group({
            nom_destination:[this.destination.nom_destination,Validators.required],
            description:[this.destination.description, Validators.required],
            image:['', Validators.required],
            compagnie_vol:[this.destination.vols.compagnie_vol, Validators.required],
            num_vol:[this.destination.vols.num_vol, Validators.required],
            heure_depart:[this.destination.vols.heure_depart, Validators.required],
            heure_arrivee:[this.destination.vols.heure_arrivee, Validators.required],
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

  onSubmit(id=""): void {
    console.log(this.destinationForm.value)
    const destination:Destination = {
      _id: this.destination._id,
     nom_destination: this.destinationForm.value.nom_destination,
     description: this.destinationForm.value.description,
     image: this.imageUrl,
     vols:{
      _id: this.destination.vols._id,
      compagnie_vol: this.destinationForm.value.compagnie_vol,
      num_vol: this.destinationForm.value.num_vol,
      heure_depart: this.destinationForm.value.heure_depart,
      heure_arrivee:this.destinationForm.value.heure_arrivee,
     }
 }
    if(this.destinationForm.valid||true){
      this.destinationService.edit(id, destination).subscribe(()=>{
        this.router.navigateByUrl('/home')
      })
    }
    
  }
}