import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from '../client/src/components/App';

describe('App' , () => {
  it('should render component', () => {
    const wrapper = shallow(<App />);

  });
});