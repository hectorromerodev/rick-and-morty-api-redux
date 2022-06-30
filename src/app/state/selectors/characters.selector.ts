import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterState } from '@state/reducers/characters.reducer';


export const selectCharacters = createFeatureSelector<CharacterState>('characters');
export const selectAllCharacters = createSelector(
  selectCharacters,
  (state) => state.characters);
