import React from 'react';
import { shallow } from 'enzyme';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';
import ContentView from '../Components/ContentView';

describe('ContentView Component Elements', () => {
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

    const reducerAuth = {firstname: 'test'}


    jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
        state: {reducerNews, reducerAuth}
    }))

    const wrapper = shallow(
    <Context.Provider>
        <ContentView />
    </Context.Provider>
    ).dive();

    it('Context true Header Component', () => {
    expect(wrapper.find('Header')).toHaveLength(1)
    })

    it('h1 tag', () => {
        expect(wrapper.find('h1.mt-5')).toHaveLength(1)
    })
    
    it('content img', () => {
        expect(wrapper.find('img').first().prop('src')).toEqual(reducerNews[0].img1)
    })

    it('Delete component', () => {
        expect(wrapper.find('Delete').first()).toHaveLength(1)
    })

    it('Link to edit', () => {
        expect(wrapper.find('Link').at(0).first().prop('to')).toEqual(`edit/${reducerNews[0].id}`)
    })

    it('Link to fullnews', () => {
        const props = {
            pathname: `fnews/${reducerNews[0].id}`,
            data: [{
                'body': reducerNews[0].body,
                'catagory': reducerNews[0].catagory,
                'img1': reducerNews[0].img1,
                'img2': reducerNews[0].img2,
                'img3': reducerNews[0].img3,
                'login': reducerNews[0].login,
                'time': reducerNews[0].time,
                'title': reducerNews[0].title
            }]
        }
        expect(wrapper.find('Link').at(1).first().prop('to')).toEqual(props)
    })

    it('Content title', () => {
        expect(wrapper.find('h5').text()).toEqual(reducerNews[0].title)
    })

    it('Content body', () => {
        expect(wrapper.find('p.text-justify').text()).toEqual(reducerNews[0].body)
    })

    it('Content catagory', () => {
        expect(wrapper.find('p').at(1).text()).toEqual(reducerNews[0].catagory)
    })

    it('Content login', () => {
        const login = 'Автор: ' + reducerNews[0].login
        expect(wrapper.find('p').at(2).text()).toEqual(login)
    })

    it('Content time', () => {
        expect(wrapper.find('p').at(3).text()).toEqual(reducerNews[0].time)
    })
})

