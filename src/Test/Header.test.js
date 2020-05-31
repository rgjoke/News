import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Components/Header';

describe('Header Component', () => {
    const newFilter = shallow(<Header />)
    
    it('Filter', () => {
        expect(newFilter.find('Filter')).toHaveLength(1)
    })

    it('Autorized', () => {
        expect(newFilter.find('Autorized')).toHaveLength(1)
    })
})