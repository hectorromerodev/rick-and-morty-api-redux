import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { take, pluck, throttleTime, catchError, map } from 'rxjs/operators';

import { environment } from '@environment/environment';
import { CharacterModel } from '@models/character.models';
import { EpisodeModel } from '@models/episodes.models';
import { LocationModel } from '@models/location.model';

const ENDPOINT: string = `${environment.BASE_URL}/`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(pageNum = 1): Observable<CharacterModel[]> {
    const params = new HttpParams().set('page', pageNum);
    return this.http.get<{ results: CharacterModel[] }>(ENDPOINT.concat(environment.CHARACTERS), { params })
      .pipe(
        take(1),
        map(res => res.results),
        throttleTime(1000),
        catchError(error => {
          console.warn(error, 'No more characters to load');
          return of([])
        }),
      )
  }

  getEpisodes(pageNum = 1): Observable<EpisodeModel[]> {
    const params = new HttpParams().set('page', pageNum);
    return this.http.get<{ results: EpisodeModel[] }>(ENDPOINT.concat(environment.EPISODES), { params })
      .pipe(
        take(1),
        map(res => res.results),
        throttleTime(1000),
        catchError(error => {
          console.warn(error, 'No more episodes to load');
          return of([])
        })
      )
  }

  getLocations(pageNum = 1): Observable<LocationModel[]> {
    const params = new HttpParams().set('page', pageNum);
    return this.http.get<{ results: LocationModel[] }>(ENDPOINT.concat(environment.LOCATIONS), { params })
      .pipe(
        take(1),
        map(res => res.results),
        throttleTime(1000),
        catchError(error => {
          console.warn(error, 'No more locations to load');
          return of([])
        })
      )
  }

}
