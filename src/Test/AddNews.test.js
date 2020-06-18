import React from 'react';
import { shallow } from 'enzyme';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';
import AddNews from '../Components/AddNews';

describe('Add News Component', () => {
    describe('Auth true', () => {
    const reducerNews = [{
        id: 1,
        title: 'test',
        img1: 'img1',
        img2: 'img2',
        img3: 'img3',
        body: 'body',
        catagory: 'catagory',
        login: 'login',
        time: 'time'
}]

    const reducerAuth = { id: 1}
    jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
        state: {reducerAuth, reducerNews}
    }))

    const wrapper = shallow(
        <Context.Provider>
            <AddNews />
        </Context.Provider>
        ).dive();
    
    it('h1 content', () => {
        expect(wrapper.find('h1').text()).toEqual('Добавить новость')
    })

    it('onSubmit form', () => {
        const submit = jest.fn().mockImplementation((cb) => () => cb({test: 'test'}));
       wrapper.find('Form').simulate('submit', {preventDefault () {}, onSubmit: submit()});
        expect(submit).toHaveBeenCalledTimes(1)
    })
})
    describe('Auth false', () => {
        const reducerNews = [{
            id: 1,
            title: 'test',
            img1: 'img1',
            img2: 'img2',
            img3: 'img3',
            body: 'body',
            catagory: 'catagory',
            login: 'login',
            time: 'time'
    }]
    
        jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
            state: {reducerNews}
        }))
    
        const wrapper = shallow(
            <Context.Provider>
                <AddNews />
            </Context.Provider>
            ).dive();

        it('Redirect auth false', () => {
            expect(wrapper.find('Redirect')).toHaveLength(1)
        })
    })

    describe('News false', () => {
        const wrapper = shallow(<AddNews />)
        it('Redirect auth and news false', () => {
            expect(wrapper.find('Redirect')).toHaveLength(1)
        })
    })
})
