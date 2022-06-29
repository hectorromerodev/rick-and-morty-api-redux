import { createReducer, on } from "@ngrx/store";

import { CharacterModel } from "@models/character.models";
import { retrieveCharacterList } from "../actions/characters.actions";

export const initialState: ReadonlyArray<CharacterModel> = [];

export const charactersReducer = createReducer(
  initialState,
  on(retrieveCharacterList, (state, { characters }) => [...state, ...characters]),
  // on(retrieveCharacter, (state, { character }) => character )
)
