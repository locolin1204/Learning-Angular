import { Component } from '@angular/core';
import { HeroService } from "../service/hero.service";
import { Hero } from "../model/Hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private heroService: HeroService) {
  }

  heroes: Hero[] = []

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5))
  }
}
