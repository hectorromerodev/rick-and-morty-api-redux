import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, mergeMap, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { DataService } from "@services/data.service";
import { loadCharacters, loadCharacterSuccess } from "@state/actions/characters.actions";

@Injectable()
export class CharactersEffect {

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCharacters),
      mergeMap(() => this.dataSvc.getCharacters().pipe(
        map(characters => loadCharacterSuccess({ characters })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dataSvc: DataService
  ) { }

}
