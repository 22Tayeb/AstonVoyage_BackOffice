import { Component, OnDestroy, OnInit } from '@angular/core';
import { Eleve, EleveDisplayedColumns } from '../model/eleve';
import { ElevesService } from '../service/eleves.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TableService } from '../service/table.service';
import { Role } from '../model/table';
import { Subject, takeUntil } from 'rxjs';
import { LoaderService } from '../service/loader.servive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit, OnDestroy {
  eleves!: Eleve[];
  displayedColumns: EleveDisplayedColumns[] = [];
  destroySubject$ = new Subject();
  isLoading = false

  constructor(private elevesService:ElevesService, 
              private router:Router, 
              private tableService:TableService,
              private route : ActivatedRoute,
              private loaderService:LoaderService
              ){}

  ngOnInit(): void {
  this.loaderService.loading.subscribe((loading) => {
    this.isLoading = loading
  });
  this.displayedColumns = this.tableService.getDisplayColumn(Role.ELEVE);
 
  this.eleves = this.route.snapshot.data['eleves']
  }

  goDetails(id:number){
    this.router.navigate([`/details/${id}`]);
  }

  goCreate(){
    this.router.navigate(['/create']);
  }

 deleteFromHtml(id:number): void {
  this.elevesService.delete(id)
  .pipe(
    takeUntil(this.destroySubject$)
  )
  .subscribe(()=>{
    this.elevesService.getEleve()
    .pipe(
      takeUntil(this.destroySubject$)
    )
    .subscribe((elevesfromback)=>{
      this.eleves = elevesfromback
    })
  })
 }

 ngOnDestroy(): void {
   this.destroySubject$.next(true);
   this.destroySubject$.complete()
 }
}
