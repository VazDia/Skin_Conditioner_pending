import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserValidationService } from 'src/app/services/validation/user-validation.service';
import { Router } from '@angular/router';
import { PhpApiServiceService } from 'src/app/services/php-api-service.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user!:FormGroup; 
  lists = <any>[]
  constructor(private api:PhpApiServiceService, private storage:LocalstorageService, private formGroup:FormBuilder, private router:Router){}

ngOnInit(){
this.user = this.formGroup.group({
  email: ['',
   [
    Validators.required,
    Validators.email,
    UserValidationService.validatorNoSpace()
   ]
  ],
  password:['',
   [
    Validators.required,
    UserValidationService.validatorNoSpace(),
    Validators.minLength(8)
   ]
  ]

})
}

/*login validation */
connexion(){
 
  let User = this.user.value;
  if(this.user.invalid){
   console.log("Erreur");
    
   
  }else{
  User= JSON.stringify(User )
  console.log(User)
  this.api.post("read_one.php",User).subscribe(
    (response: any) => {
      console.log(response)
      this.storage.set(JSON.stringify(response))
      return location.href = "user" 
      
    },
    (error: any) => {
      
      console.log('Error fetching data from API', error);
    }
  );
  }
 
}

Register(){
  this.router.navigate(["/registrer"]);
}

unLock(){
  this.router.navigate(['user/documentation'])
}

closePopup(){
  let popup=document.getElementById("popup") as HTMLElement;
  popup.classList.remove("open-popup");
 

}


}
