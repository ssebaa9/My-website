import React from 'react';
import NavigationItems from '../../../../components/Navigation/NavigationItems/NavigationItems';
import Navigationitem from '../../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavigationItems />);
})

describe('<navigationItems/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render four NavigationItem', () => {
    expect(wrapper.find(Navigationitem).length).toBe(4)
  })
})