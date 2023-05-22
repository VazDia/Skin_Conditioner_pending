import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

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
