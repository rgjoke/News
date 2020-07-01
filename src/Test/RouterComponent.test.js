import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import RouterComponent from '../Components/RouterComponent';
import Content from '../Components/Content';
import AddNews from '../Components/AddNews';
import EditNews from '../Components/EditNews';
import FullNews from '../Components/FullNews';
import FilterPage from '../Components/FilterPage';

describe('Router component', () => {
  const wrapper = shallow(<RouterComponent />);

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  it('component Content', () => {
    expect(pathMap['/']).toBe(Content);
  });

  it('component AddNews', () => {
    expect(pathMap['/add']).toBe(AddNews);
  });

  it('component EditNews', () => {
    expect(pathMap['/edit/:id']).toBe(EditNews);
  });

  it('component FullNews', () => {
    expect(pathMap['/fnews/:id']).toBe(FullNews);
  });

  it('component FullNews', () => {
    expect(pathMap['/catagory/:catagory']).toBe(FilterPage);
  });
});
