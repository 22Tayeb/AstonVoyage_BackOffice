import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
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
}
