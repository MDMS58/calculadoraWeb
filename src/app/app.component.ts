import { Component } from '@angular/core';
import { ApiService} from './api.service';
import { ApiResult } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
 
 

  
  a: number=0;
  b: number=0;
  resultado: number=0;
 

  constructor(private apiService: ApiService) { }

  sumar() {
    this.apiService.sumar(this.a, this.b).subscribe(res => {
      this.resultado = res.result;
     
    });
  }

  restar() {
    this.apiService.restar(this.a, this.b).subscribe(res => {
      this.resultado = res.result;
      
    });
  }

  multiplicar() {
    this.apiService.multiplicar(this.a, this.b).subscribe(res => {
      this.resultado = res.result;
      
    });
  }

  dividir() {
    this.apiService.dividir(this.a, this.b).subscribe(res => {
      this.resultado = res.result;
      
    });
  }


}

  
