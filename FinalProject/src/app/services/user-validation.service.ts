import { Injectable } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor() { }
  static validatorNoSpace(): ValidatorFn | any {
    return (control: FormControl) => {
      return (control.value || '').trim().length === 0 ? {'whitespace': true} : null;
    }
  }
// Age
  static validatorAge():ValidatorFn | any {
    return (control:FormControl) =>{
      return(control.value <15 )? {'whitespace': true}:null;
    }
  }
}
