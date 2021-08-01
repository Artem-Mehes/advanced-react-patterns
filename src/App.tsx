import { RenderProps } from './render-props';
import { CompoundComponent } from './compound-components';

const App = (): JSX.Element => {
  return (
    <>
      <RenderProps />
      <CompoundComponent />
    </>
  );
};

export { App };
