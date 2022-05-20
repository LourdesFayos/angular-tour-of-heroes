import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import {ConfirmationService, PrimeNGConfig, Message} from 'primeng/api';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [ConfirmationService]
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  msgs: Message[] = [];

  displayBasic: boolean = false;

  //constructor(private heroService: HeroService) { }
  constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private heroService: HeroService) {}
  
  //Observable
  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
    this.primengConfig.ripple = true;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {this.heroes.push(hero);});
    this.displayBasic=false;
  }
  
 //Metodo que elimina el heroe de la lista
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  //Metodo para confirmar el borrado de datos de la lista de heroes
  confirm(hero: Hero) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            this.delete(hero);
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }

  showBasicDialog() {
    this.displayBasic = true;
  }
  
}
