import { useLocalStorage } from './use-local-storage.hook';

enum AttunementMode {
  PHOTON,
  GRAVITON,
  UNATTUNED,
}

export interface AttunementTrackerProps {
  maxPhoton: number;
  maxGraviton: number;
  currentPhoton: number;
  currentGraviton: number;
  attunementMode: AttunementMode;
}

const defaultAttunementTrackerProps: AttunementTrackerProps = {
  maxPhoton: 3,
  maxGraviton: 3,
  currentPhoton: 0,
  currentGraviton: 0,
  attunementMode: AttunementMode.UNATTUNED,
};

function useCharacterAttunement(): {
  currentAttunement: AttunementTrackerProps;
  setCurrentAttunement: (attunement: AttunementTrackerProps) => void;
  defaultAttunement: AttunementTrackerProps;
} {
  const setCurrentAttunement = (attunement: AttunementTrackerProps) => {
    const getAttunementMode = (attunement: AttunementTrackerProps) => {
      if (attunement.currentPhoton > 0) {
        return AttunementMode.PHOTON;
      } else if (attunement.currentGraviton > 0) {
        return AttunementMode.GRAVITON;
      } else {
        return AttunementMode.UNATTUNED;
      }
    };

    const attunementMode = getAttunementMode(attunement);
    console.log('currentAttunement', attunement, attunementMode);
    _setCurrentAttunement({ ...attunement, attunementMode });
  };

  const [currentAttunement, _setCurrentAttunement] =
    useLocalStorage<AttunementTrackerProps>(
      'currentAttunement',
      defaultAttunementTrackerProps
    );

  return {
    currentAttunement,
    setCurrentAttunement,
    defaultAttunement: defaultAttunementTrackerProps,
  };
}

export { useCharacterAttunement };
