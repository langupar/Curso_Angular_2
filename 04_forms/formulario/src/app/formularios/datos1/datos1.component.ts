import { Libro, Pais } from '../libro.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
 oLibro: Libro;
 aPaises: Array<Pais>;

 constructor() { }

  ngOnInit() {
    this.oLibro = {
      autor: '',
      titulo: '',
      editorial: '',
      numpag: 0,
      exlibris: false,
      genero: '',
      pais: {codigo: '', nombre: '' }
    };

    this.aPaises = [
      {codigo: 'UK', nombre: 'Inglaterra' },
      {codigo: 'FR', nombre: 'Francia' },
      {codigo: 'IT', nombre: 'Italia' },
      {codigo: 'SP', nombre: 'España' }];
   }

  btnInsert() {
  }

}
