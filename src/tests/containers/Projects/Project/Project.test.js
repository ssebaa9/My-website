import React from 'react';
import { mount } from 'enzyme';
import Project from '../../../../containers/Projects/Project/Project';
import { Gallery } from 'react-gesture-gallery';

const defaultProps = {
  projectsData: [
    {
      title: 'Recepies',
      describe: 'You can add recepies and later modify them.',
      technologies: ['html', 'css', 'javaScript'],
      images: ['recepiesImg1', 'recepiesImg2'],
      githubLink: 'https://github.com/ssebaa9/recepies',
    }]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps.projectsData[0], ...props };
  return mount(<Project {...setupProps} />)
}

describe('<Project/>', () => {
  it('should render correctly', () => {
    const wrapper = setup()
    expect(wrapper.length).toBe(1);
  })

  it('render GalleryImage correctly', () => {
    const wrapper = setup();
    expect(wrapper.find(Gallery).length).toBe(1)
  })

  it('has a correct title props', () => {
    const wrapper = setup()
    expect(wrapper.prop('title')).toEqual(defaultProps.projectsData[0].title);
  })

  it('has a correct describe props', () => {
    const wrapper = setup()
    expect(wrapper.prop('describe')).toEqual(defaultProps.projectsData[0].describe)
  })

  it('render correctly list of technologies', () => {
    const projectsData = [{ technologies: ['html', 'css', 'javaScript', 'React'] }]

    const wrapper = setup({ ...projectsData[0] })
    expect(wrapper.find('.projects__project__describe-technologies-tech').length).toBe(4)
  })

  it('render correctly list of images', () => {
    const projectsData = [{ images: ['img1', 'img2', 'img3', 'img4'] }]

    const wrapper = setup({ ...projectsData[0] })
    expect(wrapper.find('.gallery-image').length).toBe(4)
  })

  it('has a correct githubLink props', () => {
    const wrapper = setup();
    expect(wrapper.prop('githubLink')).toEqual(defaultProps.projectsData[0].githubLink)
  })

})
