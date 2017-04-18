import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

const wrapper = shallow(<App />);

it('should display Welcome to React message ', () => {
  expect(wrapper.find("#header").text()).to.equal("Welcome to React");
});
