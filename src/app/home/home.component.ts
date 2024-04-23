import { Component, OnDestroy, OnInit } from '@angular/core';
import { Destination, DestinationDisplayedColumns } from '../model/destination';
import { DestinationService } from '../service/destination.service';
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
  destination!: Destination[];
  displayedColumns: any[] = [];
  destroySubject$ = new Subject();
  isLoading = false
  // destination: any;

  constructor(private destinationService:DestinationService, 
              private router:Router, 
              private tableService:TableService,
              private route : ActivatedRoute,
              private loaderService:LoaderService){}

  ngOnInit(): void {
  this.loaderService.loading.subscribe((loading) => {
    this.isLoading = loading
  });
  this.displayedColumns = this.tableService.getDisplayColumn(Role.ELEVE);
 
  this.destination = this.route.snapshot.data['destination']
  console.log(this.destination)
  }

  goDetails(id:string){
    this.router.navigate([`/details/${id}`]);
    console.log(id);
  }

  goCreate(){
    this.router.navigate(['/create']);
  }

 deleteFromHtml(id:string): void {
  this.destinationService.delete(id)
  .pipe(
    takeUntil(this.destroySubject$)
  )
  .subscribe(()=>{
    this.destinationService.getDestination()
    .pipe(
      takeUntil(this.destroySubject$)
    )
    .subscribe((destinationfromback)=>{
      this.destination = destinationfromback
    })
  })
 }

 ngOnDestroy(): void {
   this.destroySubject$.next(true);
   this.destroySubject$.complete()
 }
}
