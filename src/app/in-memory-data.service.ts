import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice',  power: 'Super Hot' },
      { id: 12, name: 'Narco', power: 'Really Smart' },
      { id: 13, name: 'Bombasto', power: 'Weather Changer' },
      { id: 14, name: 'Celeritas', power: 'Super Flexible' },
      { id: 15, name: 'Magneta', power: 'Super Hot' },
      { id: 16, name: 'RubberMan', power: 'Super Flexible' },
      { id: 17, name: 'Dynama', power: 'Really Smart' },
      { id: 18, name: 'Dr IQ', power: 'Super Flexible' },
      { id: 19, name: 'Magma', power: 'Super Hot' },
      { id: 20, name: 'Tornado', power: 'Weather Changer' },

    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
