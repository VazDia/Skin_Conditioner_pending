import { Component } from '@angular/core';
import { DocumentationComponent } from 'src/app/modules/app-second/pages/documentation/documentation.component';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userDetail:any;
  constructor(private router: Router, private modalService: NgbModal, private userService: UserService){}

  ngOnInit(){
    this.userDetail=this.userService.User
    console.log(this.userDetail)
  }
// Navbar toggle with small screen
  hamburger(){
    let navbar = document.querySelector('nav') as HTMLElement;
    let navbarOption = document.querySelectorAll('.option');
    navbar.classList.toggle('active');
    navbarOption.forEach(elt => elt.addEventListener('click',(e)=>{
      navbar.classList.remove('active');
    }))
  }
  
  // Pages navigations methods

documentation(){
  this.router.navigate(['user/documentation'])
}
service(){
  this.router.navigate(['user/service'])
}
diagnostic(){
  this.router.navigate(['user/diagnostic'])
}
archive(){
  this.router.navigate(['user/archive'])
}
// Popup opener
openBackDropCustomClass(content: any) {
  this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
}
// user connected Methods
Update(){
  this.router.navigate(['user/update']);
  this.modalService.dismissAll()
}

logout(){
  this.userService.logout();
  location.href="/login";
}

}


