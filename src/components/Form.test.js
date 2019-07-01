import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;
  const mockAddNewStudent = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<Form 
      addNewStudent = {mockAddNewStudent}
    />)
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleValueChange is called', () => {
    const mockEvent = { target: {name: 'name', value: 'Emily'} }

    wrapper.instance().handleValueChange(mockEvent)

    expect(wrapper.state('name')).toEqual('Emily');
  });


  it('should clear state when resetInputs is called', () => {
    const expected = {name: '', quote: '', superlative: '', photo: ''};
    wrapper.instance().setState({
      name: 'Emily', quote: 'quote', superlative: 'super', photo: 'photo'
    });

    wrapper.instance().resetInputs();

    expect(wrapper.state()).toEqual(expected)
  });

  it('should submit a new student when submitNewStudent is called', () => {

    const spy = jest.spyOn(wrapper.instance(), 'submitNewStudent');
    const mockEvent = { 
      target: { 
        name: 'name', 
        value: 'Emily',
      },
      preventDefault: jest.fn()
    };
    expect(spy).not.toHaveBeenCalled();

    wrapper.instance().submitNewStudent(mockEvent)

    expect(spy).toHaveBeenCalled()
  })
})