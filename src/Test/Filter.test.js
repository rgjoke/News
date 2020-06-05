/*import React from 'react';
import { shallow } from 'enzyme';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';
import Filter from '../Components/Filter';

describe('Filter Component', () => {
    const state = {reducerNews: [{catagory: 'test'}, {catagory: 'test1'}]}
    
    jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
        state: state
    }))

    const wrapper = shallow(
    <Context.Provider>
        <Filter />
    </Context.Provider>
    ).dive();
    
    const arrMap = [];

    state.reducerNews.map((i) => (
       arrMap.push(i.catagory.toLowerCase())
       ))

   const catagory = arrMap.filter((i,j,k) => k.indexOf(i) === j)

   it('filter input', () => {
    expect(wrapper.find('input[type="text"]').prop('name')).toEqual('filter')
    })

    describe('test input value', () => {
        beforeEach(() => {
            wrapper.find('input[type="text"]').simulate('change', {
                currentTarget: {
                    value: 'test'
                },
            },
            )
        })
        it('filter input', () => {
            console.log(wrapper.debug())
        })
    })
})
*/