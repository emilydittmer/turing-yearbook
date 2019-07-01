import React from 'react';
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort';
import { exportAllDeclaration } from '@babel/types';

describe('Cohort', () => {

  let staff;
  let wrapper;

  beforeEach(() => {
    staff = [
      {
      id: 1, 
      name: 'Emily',
      quote: 'Quote',
      superlative: 'Superlative',
      photo: 'https://placekitten.com/200/300'
      },
      {
      id: 2, 
      name: 'Jasper',
      quote: 'Quote',
      superlative: 'Superlative',
      photo: 'https://placekitten.com/200/300'
      }
    ]

    wrapper = shallow(<Cohort 
        staff={staff}
      />)
  })
  it('should match the snapshot will all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})