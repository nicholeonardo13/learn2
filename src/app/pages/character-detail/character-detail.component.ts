import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import * as json from '../../db/genshin.json';
import {ApolloService} from '../../services/apollo.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  currCharacter: Character;
  constructor(private actRoute: ActivatedRoute, private service: ApolloService) { }

  ngOnInit(): void {
    var id =+ this.actRoute.snapshot.paramMap.get('id');
    this.service.getCharacterById(id).subscribe(data => {
      this.currCharacter = data.data.character
    });
  }

}
