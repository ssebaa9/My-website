import React from 'react';
import Home from '../../../containers/Home/Home';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Home />)
})

describe('<Home/>', () => {
  it('should render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has only 1 "h1"', () => {
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('has only 1 "h2"', () => {
    expect(wrapper.find('h2').length).toBe(1)
  })

  it('has two NavigationItem', () => {
    expect(wrapper.find('NavigationItem').length).toBe(2)
  })

  it('has one img', () => {
    expect(wrapper.find('img').length).toBe(1)
  })
})