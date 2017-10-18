import { Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() nombre: string;
  @Output() evento: EventEmitter<string>;
  nombrePrefe: string;

  constructor() {
    this.evento = new EventEmitter;
  }

  ngOnInit() {}

  contestar() {
    // console.log(oEv);
    this.nombre = '';
    this.evento.emit(this.nombrePrefe);
  }
}
