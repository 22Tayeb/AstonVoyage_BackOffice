import { Component, OnInit } from '@angular/core';
import { Eleve } from '../model/eleve';
import { ElevesService } from '../service/eleves.service';
import { map } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  eleves!: Eleve[];
  displayedColumns: string[] = ['nom','prenom','age','classe','specialite','a_redouble'];

  constructor(private elevesService : ElevesService,
              private router : Router,
              private route: ActivatedRoute){
  }

  ngOnInit(): void {
  this.elevesService.getEleve()
  .pipe(
    map(response => response.eleves)
  )
  .subscribe(
    (eleves) => this.eleves= eleves
  )
}

goDetails(id:any){
 this.router.navigate([`/details/${id}`]);
}
}