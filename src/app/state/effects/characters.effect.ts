import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, mergeMap, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { DataService } from "@services/data.service";
import { loadCharacters, loadCharacterSuccess, loadOneCharacter, loadOneCharacterSuccess } from "@state/actions/characters.actions";

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

  loadOneCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOneCharacter),
      mergeMap(actions => {
        console.warn(actions);
        return this.dataSvc.getCharacterDetails(2).pipe(
          map(character => loadOneCharacterSuccess({ character })),
          catchError((error) => {
            console.error(error);
            return EMPTY;
          }),
        )
      }),
    )
  )



  constructor(
    private actions$: Actions,
    private dataSvc: DataService
  ) { }

}
