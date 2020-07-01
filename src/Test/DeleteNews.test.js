import React from 'react';
import { shallow } from 'enzyme';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';
import Delete from '../Components/DeleteNews';

describe('DeleteNews component', () => {
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

  const reducerAuth = { id: 1 };
  jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
    state: { reducerAuth, reducerNews },
  }));

  const wrapper = shallow(
    <Context.Provider>
      <Delete />
    </Context.Provider>,
  ).dive();

  it('button content', () => {
    expect(wrapper.find('button').text()).toEqual('Удалить');
  });

  it('onSubmit form', () => {
    const funcDelete = jest.fn().mockImplementation((cb) => () => cb({ test: 'test' }));
    wrapper.find('button').simulate('click', { preventDefault() {}, onClick: funcDelete() });
    expect(funcDelete).toHaveBeenCalledTimes(1);
  });
});
