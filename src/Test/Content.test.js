import React from 'react';
import { shallow } from 'enzyme';
import Content from '../Components/Content';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';

describe('Content Component', () => {
  jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
    state: { state: { id: 1 } },
  }));

  const newContent = shallow(
    <Context.Provider>
      <Content />
    </Context.Provider>,
  ).dive();

  it('ContentView', () => {
    expect(newContent.find('ContentView')).toHaveLength(1);
  });

  it('test', () => {
    jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
      state: undefined,
    }));

    const newContent = shallow(
      <Context.Provider>
        <Content />
      </Context.Provider>,
    ).dive();

    expect(newContent.find('PacmanLoader')).toHaveLength(0);
  });
});
