import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterService } from '../../services/monster/monster.service';
import { Monster } from '../../models/monster.model';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent, CommonModule],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  private monsterService = inject(MonsterService);
  private router = inject(Router)

  trackByMonster(index: number, monster: Monster): number {
    return monster.id;
  }

  monsters = signal<Monster[]>([]);
  search = model("");

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()))
  })

  constructor() {
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }

  openMonster(monster: Monster) {
    this.router.navigate(['monster', monster.id])
  }
}
