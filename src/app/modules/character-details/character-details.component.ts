import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterModel } from '@models/character.models';
import { Store } from '@ngrx/store';
import { loadOneCharacter } from '@state/actions/characters.actions';
// import { loadOneCharacter } from '@state/actions/characters.actions';
// import { CharacterState } from '@state/reducers/characters.reducer';
import { selectAllCharacters, selectOneCharacter } from '@state/selectors/characters.selector';
import { Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character$ = this.store.select(selectOneCharacter);

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // GET id from the url params
    this.route.params.pipe(
      take(1),
      tap(({ id }) => this.store.dispatch(loadOneCharacter(id))),
    ).subscribe();

  }

}
