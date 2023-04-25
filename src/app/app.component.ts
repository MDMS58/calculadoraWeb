import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
 
  num1 = 0;
  num2 = 0;
  num3 = 0;

  sumar(){
    this.num3=this.num1+this.num2;
  }
  restar(){
    this.num3=this.num1-this.num2;
  }
  dividir(){
    this.num3=this.num1/this.num2;
  }
  multiplicar(){
    this.num3=this.num1*this.num2;
  }
}
