import React from 'react';
import Contact from '../../../containers/Contact/Contact';
import { shallow } from 'enzyme';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Contact />)
})

describe('<Contact/>', () => {
  it('should render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has one form', () => {
    expect(wrapper.find('form').length).toBe(1)
  })

  it('has two inputs', () => {
    expect(wrapper.find('input').length).toBe(2)
  })

  it('has one textarea', () => {
    expect(wrapper.find('textarea').length).toBe(1)
  })

  it('has a one button', () => {
    expect(wrapper.find('button').length).toBe(1)
  })

  it('has a correct state when user typing in email input', () => {
    wrapper.find('input').at(0).simulate('change', { target: { value: 'some-email' } })

    expect(wrapper.state('email')).toEqual('some-email')
  })

  it('has a correct state when user typing in title input', () => {
    wrapper.find('input').at(1).simulate('change', { target: { value: 'some-title' } })

    expect(wrapper.state('title')).toEqual('some-title')
  })

  it('has a correct state when user typing in message textarea', () => {
    wrapper.find('textarea').simulate('change', { target: { value: 'some-message' } })

    expect(wrapper.state('message')).toEqual('some-message')
  })

  it('has no alert when when component is render', () => {
    expect(wrapper.find(".contact__container__form-alert").length).toBe(0)
  })

  it('display alert when state "alert" has a value', () => {
    wrapper.setState({ alert: 'some alert' })
    expect(wrapper.find(".contact__container__form-alert").length).toBe(1)
  })

  it('clear inputs after form submition', () => {
    wrapper.setState({ email: 'some-email', title: 'some-title', message: 'some-message' })
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(wrapper.state('email')).toEqual('')
    expect(wrapper.state('title')).toEqual('')
    expect(wrapper.state('message')).toEqual('')
  })

  it('alert has a correct value when email and message has a correct value', () => {
    wrapper.setState({ email: 'email@mail.com', title: 'some-title', message: 'some-message' })
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(wrapper.state('alert')).toEqual('Your message has been sent')
  })

  it('alert has a correct value when message textarea is empty', () => {
    wrapper.setState({ email: 'email@mail.com', title: 'some-title', message: '' })
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(wrapper.state('alert')).toEqual('Please, fill the required fields')
  })

  it('alert has a correct value when email input is empty', () => {
    wrapper.setState({ email: '', title: 'some-title', message: 'some-message' })
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    expect(wrapper.state('alert')).toEqual('Please, fill the required fields')
  })

  it('alert is cleaning 3s after sending the message', () => {
    wrapper.setState({ email: 'email@mail.com', title: 'some-title', message: 'some-message' })
    wrapper.find('form').simulate('submit', { preventDefault() { } });
    setTimeout(() => {
      expect(wrapper.state('alert')).toEqual('')
    }, 3500)
  })
})