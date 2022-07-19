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
)

export const loadOneCharacter = createAction(
  '[Character] Load One Character',
  props<{ id: Readonly<number> }>()
)

export const loadOneCharacterSuccess = createAction(
  '[Character] Load Character Success',
  props<{ character: Readonly<CharacterModel> }>()
)

export const filterCharacters = createAction(
  '[Character filter] Filter Character',
  props<{ characters: ReadonlyArray<CharacterModel> }>()
)
