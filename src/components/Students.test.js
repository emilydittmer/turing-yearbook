import React from 'react';
import { shallow, mount } from 'enzyme';
import Student from './Students';

describe('Students', () => {

  let students;
  let wrapper;

  beforeEach(() => {
    students = [
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

    wrapper = shallow(<Student 
        students={students}
      />)
  })
  it('should match the snapshot will all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})