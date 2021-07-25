import { useState, useEffect, ReactNode } from 'react';

import { useToggleContext } from './hooks';
import { ToggleContext } from './toggle-context';

interface IChildrenProps {
  children: ReactNode;
}

interface IToggleProps extends IChildrenProps {
  onToggle?(value: boolean): void;
}

const Toggle = ({ onToggle, children }: IToggleProps): JSX.Element => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    onToggle && onToggle(on);
  }, [on, onToggle]);

  const toggle = (): void => setOn((prevOn) => !prevOn);

  const contextValue = { on, toggle };

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  );
};

Toggle.On = ({ children }: IChildrenProps): JSX.Element | null => {
  const { on } = useToggleContext();

  return on ? <>{children}</> : null;
};

Toggle.Off = ({ children }: IChildrenProps): JSX.Element | null => {
  const { on } = useToggleContext();

  return on ? null : <>{children}</>;
};

Toggle.Button = (): JSX.Element => {
  const { toggle } = useToggleContext();

  return (
    <button type="button" onClick={toggle}>
      Toggle Button
    </button>
  );
};

export { Toggle };
