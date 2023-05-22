import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {UserValidationService} from '../../../services/user-validation.service'
import { APIService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users!:FormGroup;
  lists!:any;
  constructor(private api: APIService,private http:HttpClient,private formGroup:FormBuilder, private router:Router){}
 ngOnInit(){

  this.users = this.formGroup.group({
    first_name:['',
    [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
      UserValidationService.validatorNoSpace()
    ]
  ],
    last_name: ['',
    [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
      UserValidationService.validatorNoSpace()
    ]
  ],
    email:['',
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
  ],
    confirmPassword:['',
    [Validators.required
    ]
  ]

  })
 }

 
/* Register validation*/

  submitForm(){
    let popup=document.getElementById("popup") as HTMLElement;

      let popupTitle = popup.querySelector('h2') as HTMLElement;
      let popupText = popup.querySelector('p') as HTMLElement;
      let popupImage = popup.querySelector('img') as HTMLImageElement;
      let button = popup.querySelector('.m-btn') as HTMLElement;

    if (this.users.invalid){

      
      switch (this.users.invalid){

        case this.users.controls['first_name'].invalid:
        popupImage.src="../../../../assets/images/Red-Cross-Mark-PNG-File.png"
        popupTitle.textContent = "Error";
        button.style.background='red';
        popupText.textContent = "FirstNameError: please enter a valid first name"
        popup.classList.add('open-popup');
        break;

        case this.users.controls['last_name'].invalid:
        popupImage.src="../../../../assets/images/Red-Cross-Mark-PNG-File.png"
        popupTitle.textContent = "Error";
        button.style.background='red';
        popupText.textContent = "LastNameError: please enter a valid last name"
        popup.classList.add('open-popup');
        break;

        case this.users.controls['email'].invalid:
        popupImage.src="../../../../assets/images/Red-Cross-Mark-PNG-File.png"
        popupTitle.textContent = "Error";
        button.style.background='red';
        popupText.textContent = "EmailError: please enter a valid  email"
        popup.classList.add('open-popup');
        break;

        case this.users.controls['password'].invalid:
        popupImage.src="../../../../assets/images/Red-Cross-Mark-PNG-File.png"
        popupTitle.textContent = "Error";
        button.style.background='red';
        popupText.textContent = "PasswordError: please enter a valid password"
        popup.classList.add('open-popup');
        break;

        case this.users.controls['confirmPassword'].invalid:
        popupImage.src="../../../../assets/images/Red-Cross-Mark-PNG-File.png"
        popupTitle.textContent = "Error";
        button.style.background='red';
        popupText.textContent = "ConfirmPasswordError: please enter a valid password"
        popup.classList.add('open-popup');
        break;
      }
    }if (this.users.value.password != this.users.value.confirmPassword ) {
      popupImage.src="../../../../assets/images/Red-Cross-Mark-PNG-File.png"
       popupTitle.textContent = "Error";
       button.style.background='red';
       popupText.textContent = "The passwords don't match"
       popup.classList.add('open-popup');
   
    }else{
      // modal popup de creation avec succès d'un compte
      popupImage.src="../../../../assets/images/checkmark-flat.png"
      popupTitle.textContent = "Thank You";
      button.style.background='rgb(94, 204, 94)';
      popupText.textContent = "Your account have successful been created. You can log in"
      popup.classList.add('open-popup');
    

      // Enregistrement de données
      let User = this.users.value;
      delete User["confirmPassword"];
     
      User= JSON.stringify(User )
      console.log(User)
      this.api.post("create.php",User).subscribe(
      (response: any) => {
        if(response.status == 201){
          this.router.navigate(['/login'])
        }
        console.log(response)
      },
      (error: any) => {
       console.log('Error fetching data from API', error);
      }
      );

    } 
  }



  Login(){
    this.router.navigate(["/login"]);
  }

  
closePopup(){
      let popup=document.getElementById("popup") as HTMLElement;
      popup.classList.remove("open-popup");
  }
}
