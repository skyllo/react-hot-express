import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/client/App';

test('#render <App />', () => {
  shallow(<App />);
});
