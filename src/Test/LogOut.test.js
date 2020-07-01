import React from 'react';
import LogOut from '../Components/LogOut';
import { shallow } from 'enzyme';

describe('LogOut component', () => {
  const wrapper = shallow(<LogOut />);

  it('button text', () => {
    expect(wrapper.find('button').text()).toEqual('Выйти');
  });
});
