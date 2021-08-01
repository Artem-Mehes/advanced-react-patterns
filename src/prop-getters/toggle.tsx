/* eslint-disable object-curly-newline */
import { useState, useEffect, ReactNode, HTMLProps } from 'react';

interface IToggleState {
  on: boolean;
  toggle(): void;
}

interface IToggleProps {
  children(state: IGetStateAndHelpers): ReactNode;
  onToggle?(value: boolean): void;
}

type GetToggleProps = (
  props: HTMLProps<HTMLButtonElement>,
) => HTMLProps<HTMLButtonElement>;

interface IGetStateAndHelpers extends IToggleState {
  getTogglerProps: GetToggleProps;
}

const Toggle = ({ onToggle, children }: IToggleProps): JSX.Element => {
  const [on, setOn] = useState(false);

  const toggle = (): void => setOn(!on);

  useEffect(() => {
    onToggle && onToggle(on);
  }, [on, onToggle]);

  const getTogglerProps: GetToggleProps = ({ onClick, ...props } = {}) => ({
    'aria-expanded': on,
    onClick: (e) => {
      onClick && onClick(e);
      toggle();
    },
    ...props,
  });

  const getStateAndHelpers = (): IGetStateAndHelpers => ({
    on,
    toggle,
    getTogglerProps,
  });

  return <>{children(getStateAndHelpers())}</>;
};

export { Toggle };
