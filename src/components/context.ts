import React, { createContext } from 'react';

export interface MobileContextType {
  open: boolean;
  toggleOpen: () => void;
};

export const FlowersContext = createContext<MobileContextType>({
  open: false,
  toggleOpen: () => null,
});