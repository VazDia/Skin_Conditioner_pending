import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PhpApiServiceService } from 'src/app/services/php-api-service.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserValidationService } from 'src/app/services/validation/user-validation.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent {
  list= <any>[]
  user!:FormGroup;
  usermodified:any;
  usermodifiedId:any;
  constructor( private router:Router, private api:PhpApiServiceService, private storage: LocalstorageService, 
    private userService:UserService, private modalService: NgbModal, private formGroup:FormBuilder){

  }
  ngOnInit(){
    this.list= this.userService.User
  
    console.log(this.list.id_user);
    this.user= this.formGroup.group({
      first_name: [this.list.first_name,
       [
         Validators.required,
         Validators.pattern('^[a-zA-Z] +$'),
         UserValidationService.validatorNoSpace()
        ]
      ],

      last_name: [this.list.last_name,
       [
         Validators.required,
         Validators.pattern('^[a-zA-Z]+$'),
         UserValidationService.validatorNoSpace()
       
        ]
      ],

      email: [this.list.email,
       [
        Validators.required,
        Validators.email,
        UserValidationService.validatorNoSpace()
        ]
      ],
      password: ['',
        [
         Validators.required,
         Validators.email,
         Validators.minLength(8)
         ]
       ],
       confirmPassword: ['',
        [
         Validators.required,
         Validators.email,
         Validators.minLength(8)
         ]
       ]
    })
  }


  Modification(){
    this.usermodifiedId= this.list.id_user
    this.usermodified = 
   
      this.list = this.user.value;
      delete this.list["confirmPassword"];
      this.api.put("update.php",this.usermodifiedId).subscribe(
        (response: any) => {
          if(response.status == 200){
            this.storage.set(JSON.stringify(response));
          }
          console.log(response)
        },
        (error: any) => {
         console.log('Error fetching data from API', error);
        }
        );
     
      
    
  }
}
