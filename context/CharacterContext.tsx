import React, { createContext, Dispatch, useReducer } from 'react';
import { AttunementProvider } from './AttunementContext';
import { CharacterObject } from '../types/character';

interface CharacterState {
  character: CharacterObject;
  isDirty: boolean;
}

type CharacterAction =
  | { type: 'SET_CHARACTER'; payload: CharacterObject }
  | { type: 'UPDATE_CHARACTER'; payload: Partial<CharacterObject> };

interface CharacterProviderProps {
  children: React.ReactNode;
  initialState: CharacterState;
}

const characterReducer = (
  state: CharacterState,
  action: CharacterAction
): CharacterState => {
  switch (action.type) {
    case 'SET_CHARACTER':
      return {
        ...state,
        character: action.payload,
        isDirty: false,
      };
    case 'UPDATE_CHARACTER':
      return {
        ...state,
        character: {
          ...state.character,
          ...action.payload,
          abilities: action.payload.abilities
            ? [...state.character.abilities, ...action.payload.abilities]
            : state.character.abilities,
        },
        isDirty: true,
      };
    default:
      return state;
  }
};

export const CharacterContext = createContext<
  [CharacterState, Dispatch<CharacterAction>]
>([{} as CharacterState, () => ({})]);

export const CharacterProvider: React.FC<CharacterProviderProps> = ({
  children,
  initialState,
}) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  return (
    <CharacterContext.Provider value={[state, dispatch]}>
      <AttunementProvider>{children}</AttunementProvider>
    </CharacterContext.Provider>
  );
};
