import React, { createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/use-local-storage.hook';

export enum AttunementMode {
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
type AttunementContextType = {
  currentAttunement: AttunementTrackerProps;
  setCurrentAttunement: (attunement: AttunementTrackerProps) => void;
};

const AttunementContext = createContext<AttunementContextType | undefined>(
  undefined
);

export function AttunementProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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

    _setCurrentAttunement({ ...attunement, attunementMode });
  };

  const [currentAttunement, _setCurrentAttunement] =
    useLocalStorage<AttunementTrackerProps>(
      'currentAttunement',
      defaultAttunementTrackerProps
    );

  return (
    <AttunementContext.Provider
      value={{ currentAttunement, setCurrentAttunement }}
    >
      {children}
    </AttunementContext.Provider>
  );
}

export function useAttunement() {
  const context = useContext(AttunementContext);
  if (!context) {
    throw new Error('useAttunement must be used within an AttunementProvider');
  }

  return context;
}

export { defaultAttunementTrackerProps };
