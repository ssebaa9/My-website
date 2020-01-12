import React from 'react';
import DrawerToggler from '../../../../components/Navigation/DrawerToggler/DrawerToggler';
import { shallow } from 'enzyme';

let wrapper, openMenuHandlerMock;
beforeEach(() => {
  openMenuHandlerMock = jest.fn()
  wrapper = shallow(<DrawerToggler openMenuHandler={openMenuHandlerMock} />)
})

describe('<DrawerToggler/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('render tree span', () => {
    expect(wrapper.find('span').length).toBe(3)
  })

  it('span has a correct class by default', () => {
    expect(wrapper.find('span').at(0).prop('className')).toEqual("toolbar__elem")
  })

  it('span has a correct class when sideDrawer is open', () => {
    wrapper.setProps({ isOpen: true })
    expect(wrapper.find('span').at(0).prop('className')).toEqual("toolbar__elem open")
  })

  it('openMenuHandler is called when user click a button', () => {
    wrapper.find('div').simulate('click');
    expect(openMenuHandlerMock).toHaveBeenCalled()
  })

})