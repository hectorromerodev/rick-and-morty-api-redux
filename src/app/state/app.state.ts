import { ActionReducerMap } from '@ngrx/store';
import { CharactersEffect } from './effects/characters.effect';
import { charactersReducer, CharacterState } from './reducers/characters.reducer';

export interface AppState {
  characters: CharacterState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characters: charactersReducer,
}

export const ROOT_EFFECTS = [
  CharactersEffect
]
