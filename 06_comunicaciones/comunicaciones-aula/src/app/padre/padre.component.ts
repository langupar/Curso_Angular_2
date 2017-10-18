import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public nombre: string;
  constructor() { }

  ngOnInit() {
  }

  btnEvento(pName) {
    this.nombre = pName;
  }
}
