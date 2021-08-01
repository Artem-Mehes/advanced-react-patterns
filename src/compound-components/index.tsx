import { Toggle } from './toggle';

interface ICompoundComponent {
  onToggle?(): void;
}

const CompoundComponent = ({
  onToggle = (...args) => console.log('CompoundComponent onToggle', ...args),
}: ICompoundComponent): JSX.Element => {
  return (
    <>
      <h1>Compound Component</h1>

      <Toggle onToggle={onToggle}>
        <div>
          <Toggle.On>The button is on</Toggle.On>
          <Toggle.Off>The button is off</Toggle.Off>
        </div>

        <Toggle.Button />
      </Toggle>

      <hr />
    </>
  );
};

export { CompoundComponent };
