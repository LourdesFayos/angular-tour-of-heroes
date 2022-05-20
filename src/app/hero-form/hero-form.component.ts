import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})

export class HeroFormComponent {
  
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor(private heroesComponent: HeroesComponent) {}

  ngOnInit() {}

  onSubmit() { 
    this.submitted = true; 
  }

  //Método que llama al método add de la clase heroesComponent, para anyadir el heroe a la lista
  addHero(name: string) { 
    this.heroesComponent.add(name); 
  }

  newHero() {
    this.model = new Hero(42,'','');
  }

}