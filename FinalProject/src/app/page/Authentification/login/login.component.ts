import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {UserValidationService} from '../../../services/user-validation.service'
import { HttpClient } from '@angular/common/http';
import { APIService } from '../../../services/api.service';
import { UserService } from '../user.service';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user!:FormGroup; 
  lists = <any>[]
  constructor(private api: APIService,private http:HttpClient,private formGroup:FormBuilder, private router: Router, private storage : LocalStorageService){}

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
  let popup=document.getElementById("popup") as HTMLElement;

  let popupTitle = popup.querySelector('h2') as HTMLElement;
  let popupText = popup.querySelector('p') as HTMLElement;
  let popupImage = popup.querySelector('img') as HTMLImageElement;
  let button = popup.querySelector('.m-btn') as HTMLElement;
  let User = this.user.value;
  if(this.user.invalid){
    switch (this.user.invalid){
      case this.user.controls['email'].invalid:
        popupImage.src="../../../../assets/images/Red-Cross-Mark-PNG-File.png"
        popupTitle.textContent = "Error";
        button.style.background='red';
        popupText.textContent = "EmailError: please enter a valid  email"
        popup.classList.add('open-popup');
        break;
        case this.user.controls['password'].invalid:
        popupImage.src="../../../../assets/images/Red-Cross-Mark-PNG-File.png"
        popupTitle.textContent = "Error";
        button.style.background='red';
        popupText.textContent = "PasswordError: please enter a valid password"
        popup.classList.add('open-popup');
        break;
    }
   
  }else{
  User= JSON.stringify(User )
  console.log(User)
  this.api.post("read_one.php",User).subscribe(
    (response: any) => {
      this.storage.set(JSON.stringify(response))
      return location.href = "admin"; 
      
    },
    (error: any) => {
      
      console.log('Error fetching data from API', error);
    }
  );
  }
  
}


closePopup(){
  let popup=document.getElementById("popup") as HTMLElement;
  popup.classList.remove("open-popup");
 

}



}
