import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService} from '../../../../app/page/Authentification/user.service'
import { UserValidationService } from 'src/app/services/user-validation.service';
import { LocalStorageService} from '../../../../app/page/Authentification/local-storage.service'
import { ApiFService } from 'src/app/services/api-f.service';
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  list= <any>[]
  user!:FormGroup;
  usermodified:any;
  usermodifiedId:any;
  constructor( private router:Router, private api:APIService,private storage: LocalStorageService, 
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
