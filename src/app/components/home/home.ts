import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {Characters} from '../../shared/models/characters.model';
import {Continents} from '../../shared/models/continents.model';
import {ContinentService} from '../../shared/services/continent';
import {CharacterService} from '../../shared/services/character';
import { CharactersList } from "../characters-list/characters-list";
import { ContinentsList } from "../continents-list/continents-list";


@Component({
  selector: 'app-home',
  imports: [CharactersList, ContinentsList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
   //on injecte le service precedemmetn créé
  private charactersService: CharacterService=inject(CharacterService);
  private cdr = inject(ChangeDetectorRef);
  // on stocke toutes les personnes dans un tableau
  protected characters!: Characters[];
  protected maVariable:string[]=["Bonjour","Salut","Coucou"];
  //on injecte le service ContinentService
  private continentsService: ContinentService=inject(ContinentService);
  //On stocke les continents dans un tableau
  protected continents!:Continents[];

  protected filteredCharacters!:Characters[];

  
  // on subscribe à l'observable pour récupérer les données
  ngOnInit(): void {
    this.getCharactersInTemplate();
    this.getAllContinentsInTemplate();
   }
   protected getAllContinentsInTemplate():void{
    this.continentsService.getAllContinents().subscribe((continentsFromApi: Continents[])=>{
      this.continents=continentsFromApi;
      this.cdr.detectChanges();
    })
   }
   protected getCharactersInTemplate():void{
     this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[])=>{
      this.characters=charactersFromApi;
      this.filteredCharacters=this.characters;

      this.cdr.detectChanges();
    })
   }
   protected onSearch(term:string):void{
    this.filteredCharacters = this.characters.filter((character:Characters)=>{
      const fullName = character.fullName ?? '';
      return fullName.toLowerCase().includes(term.toLowerCase());
    })
  }
}
