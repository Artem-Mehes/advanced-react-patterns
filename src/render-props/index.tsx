import { Toggle } from './toggle';

interface IRenderProps {
  onToggle?(): void;
}

const RenderProps = ({
  onToggle = (...args) => console.log('Render Props onToggle', ...args),
}: IRenderProps): JSX.Element => {
  return (
    <>
      <h1>Render Props</h1>

      <Toggle onToggle={onToggle}>
        {({ on, toggle }) => (
          <div>
            {on ? 'The button is on' : 'The button is off'}
            <button type="button" onClick={toggle}>
              {on ? 'on' : 'off'}
            </button>
          </div>
        )}
      </Toggle>

      <hr />
    </>
  );
};

export { RenderProps };
