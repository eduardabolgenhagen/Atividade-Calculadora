import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Input() valueButton;
  @Output() onClick = new EventEmitter;

  constructor() { }

  clickButton(){
    // console.log(this.valueButton)
    this.onClick.emit({valor: this.valueButton})
  }

  ngOnInit() {
  }

}
