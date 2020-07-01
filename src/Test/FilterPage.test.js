import React from 'react';
import { shallow } from 'enzyme';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';
import FilterPage from '../Components/FilterPage';

describe('FilterPage component', () => {
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

  const props = {
    match: {
      params: {
        catagory: 'catagory',
      },
    },
  };

  const wrapper = shallow(
    <Context.Provider>
      <FilterPage {...props} />
    </Context.Provider>,
  ).dive();

  it('Header compoenent render', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('h1 title catagory', () => {
    expect(wrapper.find('h1').text()).toEqual(props.match.params.catagory);
  });

  it('img src', () => {
    expect(wrapper.find('img').first().prop('src')).toEqual(reducerNews[0].img1);
  });

  it('title text', () => {
    expect(wrapper.find('h5').first().text()).toEqual(reducerNews[0].title);
  });

  it('body text', () => {
    expect(wrapper.find('p').at(0).text()).toEqual(reducerNews[0].body + '...');
  });

  it('catagory text', () => {
    expect(wrapper.find('p').at(1).text()).toEqual(reducerNews[0].catagory);
  });

  it('login text', () => {
    expect(wrapper.find('p').at(2).text()).toEqual('Автор: ' + reducerNews[0].login);
  });

  it('time text', () => {
    expect(wrapper.find('em').text()).toEqual(reducerNews[0].time);
  });

  it('Link to fullnews', () => {
    const props = {
      pathname: `/fnews/${reducerNews[0].id}`,
      data: [
        {
          body: reducerNews[0].body,
          catagory: reducerNews[0].catagory,
          img1: reducerNews[0].img1,
          img2: reducerNews[0].img2,
          img3: reducerNews[0].img3,
          login: reducerNews[0].login,
          time: reducerNews[0].time,
          title: reducerNews[0].title,
        },
      ],
    };
    expect(wrapper.find('Link').first().prop('to')).toEqual(props);
  });
});
