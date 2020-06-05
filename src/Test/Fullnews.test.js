import React from 'react';
import { shallow } from 'enzyme';
import Fullnews from '../Components/FullNews';

describe('Component Test Fullnews', () => {
    const props = {
        location: {
            data: [{
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
        }
    }
   const wrapper = shallow(<Fullnews {...props} />);

   it('Content h3', () => {
       expect(wrapper.find('Col').at(0)).toHaveLength(1)
   })

   it('Header component view', () => {
    expect(wrapper.find('Col').at(1).find('h3').text()).toEqual(props.location.data[0].title)
    })

    it('Content img1', () => {
        expect(wrapper.find('CarouselItem').find('img').at(0).prop('src')).toEqual(props.location.data[0].img1)
    })

    it('Content img2', () => {
        expect(wrapper.find('CarouselItem').find('img').at(1).prop('src')).toEqual(props.location.data[0].img2)
    })

    it('Content img3', () => {
        expect(wrapper.find('CarouselItem').find('img').at(2).prop('src')).toEqual(props.location.data[0].img3)
    })

    it('Content title, body, time. login', () => {
        const content = [props.location.data[0].body, props.location.data[0].catagory, props.location.data[0].login, props.location.data[0].time]
        const a = wrapper.find('Col').find('p').map((i) => i.text())
        expect(a).toEqual(content)
    })
})