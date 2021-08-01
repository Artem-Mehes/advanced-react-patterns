/* eslint-disable react/jsx-props-no-spreading */
import { Toggle } from './toggle';

interface IPropGetters {
  onToggle?(): void;
  onButtonClick?(): void;
}

const PropGetters = ({
  onToggle = (...args) => console.log('PropGetters onToggle', ...args),
  onButtonClick = () => console.log('PropGetters onButtonClick'),
}: IPropGetters): JSX.Element => {
  return (
    <>
      <h1>Prop Getters</h1>

      <Toggle onToggle={onToggle}>
        {({ on, getTogglerProps }) => (
          <div>
            {`The button is ${on ? 'on' : 'off'}`}
            <button
              {...getTogglerProps({
                'aria-label': 'custom-button',
                onClick: onButtonClick,
                id: 'custom-button-id',
              })}
              type="button"
            >
              {on ? 'on' : 'off'}
            </button>
          </div>
        )}
      </Toggle>

      <hr />
    </>
  );
};

export { PropGetters };
