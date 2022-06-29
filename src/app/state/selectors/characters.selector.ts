import { CharacterModel } from '@models/character.models';
import { createFeatureSelector } from '@ngrx/store';

export const selectCharacters = createFeatureSelector<ReadonlyArray<CharacterModel>>('characters');
