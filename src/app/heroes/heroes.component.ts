import { Component, OnInit } from '@angular/core';
import { Hero } from "../model/Hero";
import { NgFor, NgIf, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from "../service/hero.service";
import { MessageService } from "../service/message.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  imports: [
    NgFor,
    FormsModule,
    UpperCasePipe,
    NgIf,
    HeroDetailComponent,
    RouterLink
  ],
  standalone: true
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  heroes: Hero[] = []

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
      })
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id)
      .subscribe()
  }

}
