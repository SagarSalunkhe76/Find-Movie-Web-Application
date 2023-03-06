import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseURL: string = "http://www.omdbapi.com/";
  apiKey: string = "&apikey=52a8191f";

  getMovieByTitle(param: any): Observable<any> {
    let urlPath = this.baseURL + '?t=' + param.name + this.apiKey
    return this.http.get(urlPath).pipe(
      tap((data: any) => {
        console.log("sucess to fetch movies by title", data);
      }),
      catchError((err): any => {
        console.error("failed to fetch movies by title", err);
      })
    );
  }

  getMovieById(param: any): Observable<any> {
    let urlPath = this.baseURL + '?i=' + param.id + this.apiKey;
    return this.http.get(urlPath).pipe(
      tap((data: any) => {
        console.log("sucess to fetch movies by id", data);
      }),
      catchError((err): any => {
        console.error("failed to fetch movies by id", err);
      })
    );
  }
}


