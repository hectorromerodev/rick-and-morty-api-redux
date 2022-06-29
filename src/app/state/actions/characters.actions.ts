import { createAction, props } from "@ngrx/store"

import { CharacterModel } from "@models/character.models"

export const retrieveCharacterList = createAction(
  '[Character list/API] Retrieve Characters success',
  props<{ characters: ReadonlyArray<CharacterModel> }>()
)

// export const retrieveCharacter = createAction(
//   '[Character one/API] Retrieve Character success',
//   props<{ character: Readonly<CharacterModel> }>()
// )
