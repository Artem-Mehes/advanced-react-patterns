import { RenderProps } from './render-props';
import { CompoundComponent } from './compound-components';
import { PropGetters } from './prop-getters';

const App = (): JSX.Element => {
  return (
    <>
      <RenderProps />
      <CompoundComponent />
      <PropGetters />
    </>
  );
};

export { App };
