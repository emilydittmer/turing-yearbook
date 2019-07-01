import React from 'react';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import people from '../data/yearbook-data.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should match snapshot', () => {
    let wrapper = <App />
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with a new student when addNewStudent is called', () => {
  
    let wrapper = shallow(<App />);
    let mockStudent = { name: 'Emily', quote: 'quote', superlative: 'super', photo: 'photo', id: Date.now()}

    let expected = [...people.students, mockStudent];

    wrapper.instance().addNewStudent(mockStudent);

    expect(wrapper.state('students')).toEqual(expected)
  })
})
