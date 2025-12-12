import { Component,Input } from '@angular/core';
import { Characters } from '../../shared/models/characters.model';
import { EmoticonePipe } from "../../shared/pipes/emoticone-pipe";

@Component({
  selector: 'app-characters-list',
  imports: [EmoticonePipe],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList{
  @Input() characters!: Characters[];
  @Input() maVariable!: string[];
  protected isReady: boolean = true;
  protected couleur: string = 'green';

  protected toggleReady(): void {
    this.isReady = !this.isReady;
  } 
}
