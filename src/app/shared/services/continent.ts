import { inject, Injectable } from '@angular/core';
import { Continents } from '../models/continents.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
   private continentsUrl: string = environment.apiUrl;
  private httpClient=inject(HttpClient);
  getAllContinents() :Observable<Continents[]> {
    return this.httpClient.get<Continents[]>(this.continentsUrl + '/Continents');
  }
  
}
