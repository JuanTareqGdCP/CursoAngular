import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})


export class MainPageComponent implements OnInit {
  public characters: Personaje[] = [{
    name: 'Krillin',
    power: 500
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 7500
  }]

  constructor() { }

  onNewPersonaje(personaje: Personaje): void {
    console.log('Personaje: ', personaje);
    this.characters.push(personaje);
  }

  onDeletePersonaje(index: number) {
    this.characters.splice(index, 1);
  }

  ngOnInit() { }
}
