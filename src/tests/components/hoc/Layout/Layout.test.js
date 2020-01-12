import React from 'react';
import Layout from '../../../../components/hoc/Layout/Layout';
import { shallow } from 'enzyme';
import BackDrop from '../../../../components/UI/BackDrop/BackDrop';
import NavigationPannel from '../../../../components/Navigation/NavigationPannel/NavigationPannel';
import SideDrawer from '../../../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../../../components/Footer/Footer';


describe('<Layout/>', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Layout>some-children-value</Layout>)
  })

  it('should render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render BackDrop', () => {
    expect(wrapper.find(BackDrop).length).toEqual(1)
  })

  it('render NavigationPannel', () => {
    expect(wrapper.find(NavigationPannel).length).toEqual(1)
  })

  it('render SideDrawer', () => {
    expect(wrapper.find(SideDrawer).length).toEqual(1)
  })

  it('render Footer', () => {
    expect(wrapper.find(Footer).length).toEqual(1)
  })

  it('has a correct children props in layout container', () => {
    expect(wrapper.find('.layout__content').prop('children')).toEqual('some-children-value')
  })
})
