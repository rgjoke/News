import React from 'react';
import { shallow } from 'enzyme';
import * as ContextModule from '../Components/context';
import Context from '../Components/context';
import EditNews from '../Components/EditNews';


describe('Edit News Component', () => {
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
    
        const reducerAuth = { id: 1 }
        jest.spyOn(ContextModule, 'useMyContext').mockImplementation(() => ({
            state: {reducerAuth, reducerNews}
        }))

        const props = {
            match: {
                params: {
                    id: 1
                }
            }
        }
    
        const wrapper = shallow(
            <Context.Provider>
                <EditNews {...props} />
            </Context.Provider>
            ).dive();
        
    it('h1 content', () => {
        expect(wrapper.find('h1').text()).toEqual('Редактирование новости')
    })

    it('onSubmit form', () => {
        const submit = jest.fn().mockImplementation();
       wrapper.find('Form').simulate('submit', {preventDefault () {}, onSubmit: submit()});
        expect(submit).toHaveBeenCalledTimes(1)
    })
    /*
    it('input test', () => {
        const handleChange = jest.fn().mockImplementation();
        wrapper.find('[name="img1"]').simulate('change', {target: {name: 'test', value: 'test'}}, {onChange: handleChange()})
        expect(handleChange).toHaveBeenCalledTimes(1)
    })*/
    })
})