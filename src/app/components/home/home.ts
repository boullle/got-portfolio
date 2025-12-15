import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Characters} from '../../shared/models/characters.model';
import {Continents} from '../../shared/models/continents.model';
import {ContinentService} from '../../shared/services/continent';
import {CharacterService} from '../../shared/services/character';
import { CharactersList } from "../characters-list/characters-list";
import { ContinentsList } from "../continents-list/continents-list";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  imports: [CharactersList, ContinentsList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit, OnDestroy {
  //Accès à un élément HTML par sa référence (#searchInput)
  @ViewChild('searchInput') private input!:ElementRef<HTMLInputElement>;

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
  private subscriptions : Subscription[]=[];

  
  // on subscribe à l'observable pour récupérer les données
  ngOnInit(): void {
    this.getCharactersInTemplate();
    this.getAllContinentsInTemplate();
   }
    ngAfterViewInit(): void {
      this.input.nativeElement.focus();
    }
   protected getAllContinentsInTemplate():void{
    this.subscriptions.push(
    this.continentsService.getAllContinents().subscribe((continentsFromApi: Continents[])=>{
      this.continents=continentsFromApi;
      this.cdr.detectChanges();
    }))
   }
   protected getCharactersInTemplate():void{
    this.subscriptions.push(
     this.charactersService.getCharacters().subscribe((charactersFromApi: Characters[])=>{
      this.characters=charactersFromApi;
      this.filteredCharacters=this.characters;

      this.cdr.detectChanges();
    }))
   }
   protected onSearch(term:string):void{
    this.filteredCharacters = this.characters.filter((character:Characters)=>{
      const fullName = character.fullName ?? '';
      return fullName.toLowerCase().includes(term.toLowerCase());
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub)=>sub.unsubscribe());
  }
}
