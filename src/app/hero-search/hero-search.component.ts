import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})

export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  
  /* debounceTime(300) -> esperamos 300ms despues de cada pulsación de teclas
    antes de tener en cuenta el termino.

    distinctUntilChanged() -> asegura que se envie una peticion solo si el texto
    del filtro ha cambiado.
    
    switchMap((term: string) => this.heroService.searchHeroes(term)) -> cambia a un
    nuevo Observable de busqueda cada vez que el termino cambia. 
  */ 
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(debounceTime(300), 
    distinctUntilChanged(), 
    switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

}
