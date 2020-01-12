import React from 'react';
import CVPage from '../../../containers/CVPage/CVPage';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../testUtils/testUtils';
import { workHistorieData, skillsData, languagesData } from '../../../data/cvData';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<CVPage />);
})

describe('CVPage', () => {
  it('should render correctly', () => {
    expect(wrapper.length).toBe(1);
  })

  it('render list workHistorie correctly', () => {
    const workHistorieEl = findByTestAttr(wrapper, 'work-historie-el');
    expect(workHistorieEl.length).toEqual(workHistorieData.length);
  })

  it('render list skills correctly', () => {
    const skillsEl = findByTestAttr(wrapper, 'skills-el');
    expect(skillsEl.length).toEqual(skillsData.length);
  })

  it('render list languages correctly', () => {
    const languageEl = findByTestAttr(wrapper, 'language-el');
    expect(languageEl.length).toEqual(languagesData.length);
  })
})