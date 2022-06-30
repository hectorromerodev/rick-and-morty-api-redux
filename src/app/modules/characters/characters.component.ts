import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCharacters } from '@state/actions/characters.actions';
import { selectAllCharacters } from '@state/selectors/characters.selector';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters$ = this.store.select(selectAllCharacters);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadCharacters());
  }

}
