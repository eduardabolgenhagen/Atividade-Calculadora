import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  calculo = "";
  
  constructor() { }

  receberValor(e){
    this.calculo += e.valor;
    console.log(this.calculo)
  }

  resultado(){
    this.calculo = eval(this.calculo);
  }

  limparTudo(){
    this.calculo = "";
  }

  ngOnInit() {
  }

}
