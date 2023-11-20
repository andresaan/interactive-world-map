import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CountryInfo } from '../Country-Info';

@Injectable({
  providedIn: 'root'
})
export class CountryInfoService {

  private apiUrl: string = 'http://api.worldbank.org/v2/country/';
  private responseType: string = '?format=json';

  constructor(private http: HttpClient) { }

  getCountryInfo(countryCode: string): Observable<any> {
    
    var response = this.http.get<CountryInfo>(this.apiUrl + countryCode + this.responseType);
  
    return response;
  }

}
