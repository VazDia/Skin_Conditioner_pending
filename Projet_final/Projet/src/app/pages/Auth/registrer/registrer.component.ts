import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserValidationService } from 'src/app/services/validation/user-validation.service';
import { Router } from '@angular/router';
import { PhpApiServiceService } from 'src/app/services/php-api-service.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent {

  users!:FormGroup;
  lists!:any;

  constructor(private api: PhpApiServiceService, private http:HttpClient,private formGroup:FormBuilder, private router:Router){}
 
  ngOnInit(){
// création d'un formulaire réactif 
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

 
/* Validation de l'enregistrement en utilsation un popup de correction*/

  submitForm(){
    let popup=document.getElementById("popup") as HTMLElement;

      let popupTitle = popup.querySelector('h2') as HTMLElement;
      let popupText = popup.querySelector('p') as HTMLElement;
      let popupImage = popup.querySelector('img') as HTMLImageElement;
      let button = popup.querySelector('.m-btn') as HTMLElement;

    // Cas de données du formulaire non valides
    if (this.users.invalid){

      
    }if (this.users.value.password != this.users.value.confirmPassword ) {
    
   
    }else{
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

  
  

}
