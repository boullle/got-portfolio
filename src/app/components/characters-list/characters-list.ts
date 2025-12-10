import { Component } from '@angular/core';
import { Character } from '../../shared/models/characters.model';

@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList{
  protected newCharacter: Character = {
    id: 1,
    firstName: 'Arya',
    lastName: 'Stark',
    fullName: 'Arya Stark',
    title: 'Princess',
    family: 'House Stark',
    image: '',
    imageUrl: ''
  }
  protected charactersFromApi: Character[] = [
    {
    id: 2,
    firstName: 'Arya',
    lastName: 'Stark',
    fullName: 'Arya Stark',
    title: 'Princess',
    family: 'House Stark',
    image: '',
    imageUrl: ''
  },
  {
    id: 3,
    firstName: 'Arya',
    lastName: 'Stark',
    fullName: 'Arya Stark',
    title: 'Princess',
    family: 'House Stark',
    image: '',
    imageUrl: ''
  },
  {
    id: 4,
    firstName: 'Arya',
    lastName: 'Stark',
    fullName: 'Arya Stark',
    title: 'Princess',
    family: 'House Stark',
    image: '',
    imageUrl: ''
  }
]
  
}
