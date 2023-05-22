import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent {


constructor(private router:Router){}

Register(){
  this.router.navigate(["/register"]);
}
Login(){
  this.router.navigate(["/login"]);
}

}
