import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhpApiServiceService {

  baseUrl : string  = " /Users/";
  baseURL : string  = " /Doctors/";

  constructor(private Http : HttpClient) { }
  get(endpoint : string )   {
    return this.Http.get(this.baseUrl + endpoint , {headers : this.httpHeaders()})
  }
  
  get_one(endpoint:string, data:any){
    return this.Http.post(this.baseUrl + endpoint ,data, {headers : this.httpHeaders()})
  }

  post(endpoint : string , data : any) {
    return this.Http.post(this.baseUrl + endpoint, data, {headers : this.httpHeaders()});
  }
  put(endpoint : string , data : any){
    return this.Http.put(this.baseUrl + endpoint, data, {headers : this.httpHeaders()})
  }

  // Doctors methods.
  Dget(endpoint : string){
    return this.Http.get(this.baseURL + endpoint , {headers : this.httpHeaders()})
  }

/***************************************************************************/
  Dget_one(endpoint:string, data:any){
    return this.Http.post(this.baseURL + endpoint ,data, {headers : this.httpHeaders()})
  }

/***************************************************************************/
Dpost(endpoint : string , data : any){
  return this.Http.post(this.baseURL + endpoint, data, {headers : this.httpHeaders()});
}

/***************************************************************************/
Dput(endpoint : string, data : any){
  return this.Http.put(this.baseURL + endpoint, data, {headers : this.httpHeaders()})
}

  httpHeaders() {
    return new HttpHeaders({
     
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT',
      'Accept': 'application/json',
      
    });
  }

}
