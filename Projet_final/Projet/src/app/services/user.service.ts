import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User:any;

  constructor(private storageService : LocalstorageService ){
    this.User = JSON.parse(this.storageService.get("AppUser") as string);
  }

  logout(){
    this.storageService.delete("AppUser");
  }

  isConnected() : boolean {
    return !!this.User;
  }

}
