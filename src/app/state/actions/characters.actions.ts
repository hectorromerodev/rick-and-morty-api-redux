import { createAction, props } from "@ngrx/store"

import { CharacterModel } from "@models/character.models"

export const loadCharacters = createAction(
  '[Character List] Load Characters',
);

export const loadCharacterSuccess = createAction(
  '[Character List] Load Characters Success',
  props<{ characters: ReadonlyArray<CharacterModel> }>()
);

export const loadCharactersFailure = createAction(
  '[Character List] Load Characters Failure',
  props<{ error: Readonly<String> }>
)
