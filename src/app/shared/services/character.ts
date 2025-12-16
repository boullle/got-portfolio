import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {Characters} from '../models/characters.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl: string = environment.apiUrl;
  private httpClient=inject(HttpClient);

  getCharacters() :Observable<Characters[]> {
    return this.httpClient.get<Characters[]>(this.charactersUrl + '/Characters');
  }
}


