import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import App from '../App';
import Layout from '../components/hoc/Layout/Layout';
import Home from '../containers/Home/Home';
import CVPage from '../containers/CVPage/CVPage';
import Projects from '../containers/Projects/Projects';
import Contact from '../containers/Contact/Contact';

let wrapper;
beforeEach(() => {
  wrapper = mount(<MemoryRouter><App /></MemoryRouter>)
})

describe('<App/>', () => {
  it('should render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render correctly layout component', () => {
    expect(wrapper.find(Layout).length).toBe(1)
  })

  it('render Home component by default', () => {
    expect(wrapper.find(Home).length).toBe(1);
  })

  it('render CVPage component when route "/cv" is correct', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/cv']}><App /></MemoryRouter>)
    expect(wrapper.find(CVPage).length).toBe(1)
    expect(wrapper.find(Home).length).toBe(0)
    expect(wrapper.find(Projects).length).toBe(0)
    expect(wrapper.find(Contact).length).toBe(0)
  })

  it('render Projects component when route "/projects" is correct', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/projects']}><App /></MemoryRouter>)
    expect(wrapper.find(Projects).length).toBe(1)
    expect(wrapper.find(CVPage).length).toBe(0)
    expect(wrapper.find(Home).length).toBe(0)
    expect(wrapper.find(Contact).length).toBe(0)
  })

  it('render Contact component when route "/contact" is correct', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/contact']}><App /></MemoryRouter>)
    expect(wrapper.find(Contact).length).toBe(1)
    expect(wrapper.find(Projects).length).toBe(0)
    expect(wrapper.find(CVPage).length).toBe(0)
    expect(wrapper.find(Home).length).toBe(0)
  })
})