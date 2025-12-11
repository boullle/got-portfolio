import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {Characters} from '../models/characters.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private charactersUrl: string = 'https://thronesapi.com/api/v2/Characters';
  private httpClient=inject(HttpClient);
  getCharacters() :Observable<Characters[]> {
    return this.httpClient.get<Characters[]>(this.charactersUrl);
  }
}


