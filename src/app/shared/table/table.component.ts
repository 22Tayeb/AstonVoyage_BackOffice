import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  private BACK_URL = environment.apiURL;

ngOnInit(): void {
    console.log(this.source);
}
@Input() source:any[] = []
@Input() displayedColumns:any[] = [];
@Output() deleteNotification = new EventEmitter();
@Output()editNotification = new EventEmitter();

deleteFromHtml(id:number) {
  this.deleteNotification.emit(id)
}
goDetails(id : number){
  this.editNotification.emit(id)
}

getImageUrl(filename: string): string {
  return this.BACK_URL+ "/destination/download/"+filename;
}
}
