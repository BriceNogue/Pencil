import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Artwork } from '../models/artwork-model';

@Injectable()
export class ArtworkService {

  private readonly ARTWORK_API_URL = 'http://localhost:8080/artwork';

  constructor(private httpClient: HttpClient) { }

  public getArtworks(): Observable<Artwork[]> {
    return this.httpClient.get<Artwork[]>('http://localhost:8080/artwork/artworks').pipe(
      tap(artworks => console.log('artworks:', artworks)),
      catchError(this.handleError)
    );
  }

  public addArtworks(artwork: Artwork) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    return this.httpClient.post<Artwork>(this.ARTWORK_API_URL, artwork, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error))
    );
  }

  private log (response: any) {
    console.table(response);
  }
  
  private handleError(error : HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError(
      `Something bad happened; please try again later.`
    );
  } 
}
