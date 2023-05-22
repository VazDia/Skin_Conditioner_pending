import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlaskAPIService } from 'src/app/services/flask-api.service';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
  imageURL: any;
  result: any;
  loading: boolean = false;
  selectedFile:any;
  text="Pour plus d'information, veuillez contacter un médécin. Par ailleur, la plateforme vous fournie des spécialisés en la matière. Vous pouvez les contacter pour vos besoins"

  constructor( private apif:FlaskAPIService) {}

  ngOnInit() {
    this.hideLoader();
    this.hideResult();
  }

  readURL(event: any): void {
    this.hideResult()
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageURL = e.target.result;
        this.selectedFile = event.target.files[0];
        console.log(`file: ${this.selectedFile}, file name: ${this.selectedFile.name}`)
      };
      
      reader.readAsDataURL(event.target.files[0]);
    }
  }

   
 /*
 predict(){
  
 }*/
 

  predict(): void {
    this.showLoader();
    const formData = new FormData();
    formData.append('file',this.selectedFile, this.selectedFile.name)
    this.apif.post('predict5',formData).subscribe((res: any) => {
      this.hideLoader();
      this.showResult();
      this.result = res  ;
      console.log(this.result)
      console.log('Success!');
    });
  }
  

  private showLoader(): void {
    this.loading = true;
  }

  private hideLoader(): void {
    this.loading = false;
  }

  private showResult(): void {
    let result = <HTMLElement>document.getElementById('result');
    result.style.opacity='0';
    result.style.display ='block';
    result.style.transition ='opacity 0.1s';
    result.style.opacity ='1';

  }

  private hideResult(): void {
    let result = <HTMLElement>document.getElementById('result');
    result.style.display = 'none';
  }

}
