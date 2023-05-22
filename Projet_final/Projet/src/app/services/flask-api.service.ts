import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlaskAPIService {
  baseUrl : string  = "/cinq/";
  constructor(private http:HttpClient) { }

  post(endpoint : string, data:any )   {
    return this.http.post(this.baseUrl + endpoint, data, {headers : this.httpHeaders()});
  }
  get(endpoint : string )   {
    return this.http.get(this.baseUrl + endpoint , {headers : this.httpHeaders()})
  }

  httpHeaders() {
    return new HttpHeaders({
     
      
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT',
      'Accept': 'application/json',
    });
  }

}
