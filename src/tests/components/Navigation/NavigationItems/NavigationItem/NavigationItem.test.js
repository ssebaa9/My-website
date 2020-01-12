import React from 'react';
import NavigationItem from '../../../../../components/Navigation/NavigationItems/NavigationItem/NavigationItem';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<NavigationItem route="/" class='some-class'>some-children-props</NavigationItem>)
})

describe('<Navigationitem/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has one NavLink', () => {
    expect(wrapper.find('NavLink').length).toBe(1)
  })

  it('NavLink has a correct route by default', () => {
    expect(wrapper.find('NavLink').prop('to')).toEqual('/')
  })

  it('NavLink has a correct route', () => {
    const wrapper = shallow(<NavigationItem route="/projects" />)
    expect(wrapper.find('NavLink').prop('to')).toEqual('/projects')
  })

  it('NavLink has a correct className from props', () => {
    expect(wrapper.find('NavLink').prop('className')).toEqual('some-class');
  })

  it('NavLink has a correct children props', () => {
    expect(wrapper.find('NavLink').prop('children')).toEqual('some-children-props');
  })

})