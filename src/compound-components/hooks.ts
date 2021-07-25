import { useContext } from 'react';

import { IToggleContext, ToggleContext } from './toggle-context';

const useToggleContext = (): never | IToggleContext => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('Warning: Context is being used outside of a provider');
  }

  return context;
};

export { useToggleContext };
