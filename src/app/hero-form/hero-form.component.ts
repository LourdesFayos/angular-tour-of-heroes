import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';

import { HeroService } from '../hero.service';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})

export class HeroFormComponent {
  
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  @Output() updateChange = new EventEmitter<any>();

  constructor(private heroService: HeroService) {}

  ngOnInit() {}
  
  onSubmit() { 
    this.submitted = true; 
  }

  //Anyade el heroe en la lista con los datos que se introducen en el formulario
  addHero(): void {
    const new_Hero = new Hero(42, this.model.name, this.model.power, this.model.alterEgo);
    this.heroService.addHero(new_Hero).subscribe(hero => {this.updateChange.emit();});
  }

  newHero() {
    this.model = new Hero(42,'','');
  }

}