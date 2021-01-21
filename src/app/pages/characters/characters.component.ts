import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import * as json from '../../db/genshin.json';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters;

  constructor(
    private service: ApolloService
  ) { }
  ngOnInit(): void {
    this.service.getCharacters().subscribe( async data => {
      this.characters = data.data.characters;
    });

  }

}
