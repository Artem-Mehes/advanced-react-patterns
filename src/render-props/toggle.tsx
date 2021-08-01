import { useState, useEffect, ReactNode } from 'react';

interface IToggleState {
  on: boolean;
  toggle(): void;
}

interface IToggleProps {
  children(state: IToggleState): ReactNode;
  onToggle?(value: boolean): void;
}

const Toggle = ({ children, onToggle }: IToggleProps): JSX.Element => {
  const [on, setOn] = useState(false);

  const toggle = (): void => setOn((prevOn) => !prevOn);

  useEffect(() => {
    onToggle && onToggle(on);
  }, [on, onToggle]);

  const giveState = (): IToggleState => ({ on, toggle });

  return <>{children(giveState())}</>;
};

export { Toggle };
