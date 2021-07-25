import { createContext } from 'react';

export interface IToggleContext {
  on: boolean;
  toggle(): void;
}

const initialValue = {
  on: false,
  toggle: () => {},
};

const ToggleContext = createContext(initialValue);

export { ToggleContext };
