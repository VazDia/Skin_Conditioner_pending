import { Component, OnInit } from '@angular/core';
import { PhpApiServiceService } from 'src/app/services/php-api-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private api: PhpApiServiceService){

  }
  ngOnInit(){
    this.selectDoctors()
  }

  selectDoctors(){
    this.api.Dget("read.php").subscribe((response:any) =>{
      console.log(response);
    },
    (error:any) =>{
      console.log('Error fetching data from API', error);
    }
    );
  }

}
