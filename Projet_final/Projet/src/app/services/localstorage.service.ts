import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  get(key : string) {
    return localStorage.getItem(key);
  }

  set(value : any) {
    localStorage.setItem("AppUser", value);
  }

  delete(key : string ) {
    localStorage.removeItem(key);
  }
}
