import React from 'react';
import { shallow } from 'enzyme';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';
import Filter from '../Components/Filter';

describe('Filter component', () => {
  const reducerNews = [
    {
      id: 1,
      title: 'test',
      img1: 'img1',
      img2: 'img2',
      img3: 'img3',
      body: 'body',
      catagory: 'catagory',
      login: 'login',
      time: 'time',
    },
  ];

  jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
    state: { reducerNews },
  }));

  const wrapper = shallow(
    <Context.Provider>
      <Filter />
    </Context.Provider>,
  ).dive();

  it('input render', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });
});
