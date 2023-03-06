import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private movieData = new BehaviorSubject<any>('');
  movie = this.movieData.asObservable();

  private movieDataClear = new BehaviorSubject<any>(false);
  clear = this.movieDataClear.asObservable();


  constructor() { }

  send(movieData: any) {
    this.movieData.next(movieData);
  }

  sendClear() {
    this.movieDataClear.next(true);
  }

}
