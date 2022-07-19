import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCharacters } from '@state/actions/characters.actions';
import { AppState } from '@state/app.state';
import { selectAllCharacters } from '@state/selectors/characters.selector';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characters$ = this.store.select(selectAllCharacters);
  showScroll: boolean = false;
  private pageNum: number = 1;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadCharacters());
  }

  onScrollDown(): void {
    console.warn('onScrollDown');
    // this.pageNum++;
    // this.dataServ.getCharacters(this.pageNum);
  }

}
