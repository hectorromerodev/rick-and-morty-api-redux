import { CharacterModel } from '@models/character.models';
import { ActionReducerMap } from '@ngrx/store';
import { charactersReducer } from './reducers/characters.reducer';

export interface AppState {
  characters: ReadonlyArray<CharacterModel>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  characters: charactersReducer
}
