import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})

export class HeroFormComponent {
  
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  displayBasic: boolean = false;
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42,'','');
  }

  showBasicDialog() {
    this.displayBasic = true;
}

}
