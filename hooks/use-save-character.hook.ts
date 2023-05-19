import { useToast } from '@chakra-ui/react';
import { asyncFetch } from '../data/graphql/graphql-fetcher';
import { saveCharacterMutationGraphQL } from '../data/graphql/snippets/mutation';
import { CharacterObject } from '../types/character';

function useHandleSaveCharacter(): (
  character: CharacterObject
) => Promise<CharacterObject | undefined> {
  const characterSaveToast = useToast();

  const handleSaveCharacter = async (character: CharacterObject) => {
    try {
      const saveCharacterApiInput = {
        ...character,
        abilityScoreModifiers: undefined,
      };

      const result = await asyncFetch(saveCharacterMutationGraphQL, {
        input: saveCharacterApiInput,
      });

      if (result?.errors.length > 0) throw new Error('Something went wrong.');

      return result.data.saveCharacter.character as CharacterObject;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : error;

      console.log('Error saving character', { errorMessage });
      characterSaveToast({
        title: 'Something went wrong saving character.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }

    characterSaveToast({
      title: 'Character Saved.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  return handleSaveCharacter;
}

export { useHandleSaveCharacter };
