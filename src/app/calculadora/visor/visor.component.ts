import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  @Input() valueOperation;
  
  constructor() { }

  ngOnInit() {
  }

}
