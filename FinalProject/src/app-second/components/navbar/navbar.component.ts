import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../../../src/app/page/Authentification/user.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetail:any;
  constructor(private router: Router, private modalService: NgbModal, private userService: UserService){

  }
  ngOnInit(){
    this.userDetail=this.userService.User
    console.log(this.userDetail)
  }

  hamburger(){
    let navbar = document.querySelector('nav') as HTMLElement;
    let navbarOption = document.querySelectorAll('.option');
    navbar.classList.toggle('active');
    navbarOption.forEach(elt => elt.addEventListener('click',(e)=>{
      navbar.classList.remove('active');
    }))
    
  }

 

  

  home(){
    this.router.navigate(["admin/home"]);
  }

  medical(){
    this.router.navigate(["admin/medical"]);
  }

  diagnostic(){
    this.router.navigate(["admin/diagnostic"]);
  }

  archives(){
    this.router.navigate(["admin/archive"]);
  }

  openBackDropCustomClass(content: any) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }
  
  Update(){
    this.router.navigate(['admin/update']);
    this.modalService.dismissAll()
  }

  UserBlocked(){
   this.userService.isConnected();
  }

  logout(){
    this.userService.logout();
    location.href="/login";
  }
  
}
