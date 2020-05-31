import React from 'react';
import { shallow } from 'enzyme';
import Autorized from '../Components/Autorized';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';

describe('Autorized Component Auth False', () => {
    jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
        state: {reducerAuth: undefined}
    }))

    const newAutorized = shallow(
        <Context.Provider>
            <Autorized />
        </Context.Provider>
        ).dive();

    it('h6 LogIn', () => {
        expect(newAutorized.find('h6').text()).toEqual('Войти через...')
    })

    it('GoogleLogIn', () => {
        expect(newAutorized.find('GoogleLogIn')).toHaveLength(1)
    })

    it('FacebookLogIn', () => {
        expect(newAutorized.find('FacebookLogIn')).toHaveLength(1)
    })
})


describe('Autorized Component Auth True', () => {
    const state = {reducerAuth: {firstname: 'Test'}}

    jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
        state: state
    }))

    const newAutorized = shallow(
        <Context.Provider>
            <Autorized />
        </Context.Provider>
        ).dive();

    it('LogOut Component', () => {
        expect(newAutorized.find('LogOut')).toHaveLength(1)
    })

    it('Img-profile block', () => {
        const context = state.reducerAuth.firstname.substring(0,1)
        expect(newAutorized.find('.img-profile p').text()).toEqual(context)
    })

    it('Prfile firstname', () => {
        expect(newAutorized.find('p.text-white').text()).toEqual(state.reducerAuth.firstname)
    })

    it('Link to page `/add` ', () => {
        expect(newAutorized.find('Link').prop('to')).toEqual('/add')
    })
})