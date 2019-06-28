import React from 'react';
import { shallow, mount} from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let wrapper = shallow(
      <Person 
        name='Emily'
        quote='Great Quote'
        superlative='Most likely to be amazing'
      />
    );

    expect(wrapper).toMatchSnapshot()
  })
})