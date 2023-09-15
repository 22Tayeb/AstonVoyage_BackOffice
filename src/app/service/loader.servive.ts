import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading = new BehaviorSubject<boolean>(false)

  constructor(private http : HttpClient) { }

  isLoading() {
    //this.loading.next(true);
  }

  setLoading(value:boolean) {
    this.loading.next(value);
  }

}

