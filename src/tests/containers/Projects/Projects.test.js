import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../../../containers/Projects/Projects';
import Project from '../../../containers/Projects/Project/Project';
import { projectsData } from '../../../data/projectsData';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Projects />);
})

describe('<Projects/>', () => {
  it('should render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should render list of projects correctly', () => {
    expect(wrapper.find(Project).length).toBe(projectsData.length)
  })
})