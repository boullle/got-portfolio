import { ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersList } from './components/characters-list/characters-list';
import { CharacterService } from './shared/services/character';
import { Characters } from './shared/models/characters.model';
import { ContinentService } from './shared/services/continent';
import { ContinentsList } from './components/continents-list/continents-list';
import { Continents } from './shared/models/continents.model';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
