import { createReducer, on } from "@ngrx/store";
import { CharacterModel } from "@models/character.models";
import { loadCharacters, loadCharacterSuccess, loadOneCharacter, loadOneCharacterSuccess } from "../actions/characters.actions";

export interface CharacterState {
  characters: ReadonlyArray<CharacterModel>,
  character: Readonly<CharacterModel>,
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CharacterState = {
  characters: [],
  character: {} as CharacterModel,
  error: null,
  status: 'pending'
}


export const charactersReducer = createReducer(
  initialState,
  // Trigger loading the characters
  on(loadCharacters, (state) => ({ ...state, status: 'loading' })),
  // Trigger get characters success
  on(loadCharacterSuccess, (state, { characters }) => ({ ...state, status: 'success', characters })),
  // Trigger get characters failure
  on(loadCharacterSuccess, (state, { characters }) => ({ ...state, status: 'error', characters })),
  // Trigger loading one character
  on(loadOneCharacter, (state) => ({ ...state, status: 'loading' })),
  // Trigger get one character
  on(loadOneCharacterSuccess, (state, { character }) => ({ ...state, status: 'success', character })),

)
