import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
/*import { isBuffer } from 'util';*/

@Injectable({
  providedIn: 'root'
})
export class UserService {


  User:any;

  constructor(private storageService : LocalStorageService ){
    this.User = JSON.parse(this.storageService.get("AppUser") as string);
  }

  logout(){
    this.storageService.delete("AppUser");
  }

  isConnected() : boolean {
    return !!this.User;
  }

}
