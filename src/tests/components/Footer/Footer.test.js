import React from 'react';
import Footer from '../../../components/Footer/Footer';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Footer />)
})

describe('<Footer/>', () => {
  it('should render correctly', () => {
    expect(wrapper.length).toBe(1);
  })
})