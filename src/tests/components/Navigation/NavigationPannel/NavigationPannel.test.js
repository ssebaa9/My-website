import React from 'react';
import NavigationPannel from '../../../../components/Navigation/NavigationPannel/NavigationPannel';
import { shallow } from 'enzyme';
import DrawerToggler from '../../../../components/Navigation/DrawerToggler/DrawerToggler';
import NavigationItems from '../../../../components/Navigation/NavigationItems/NavigationItems';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavigationPannel />);
})

describe('<NavigationPannel/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render DrowerToggler by default', () => {
    expect(DrawerToggler.length).toBe(1)
  })

  it('not render NavigationItems by default', () => {
    expect(NavigationItems.length).toBe(0)
  })
})