import React from 'react';
import BackDrop from '../../../../components/UI/BackDrop/BackDrop';
import { shallow } from 'enzyme';

let wrapper, openMenuHandlerMock;
beforeEach(() => {
  openMenuHandlerMock = jest.fn()
  wrapper = shallow(<BackDrop openMenuHandler={openMenuHandlerMock} />);
})

describe('<BackDrop/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1)
  })

  it("has not open class by default", () => {
    expect(wrapper.prop('className')).toEqual('back-drop');
  })

  it("has open class when prop isOpen = true", () => {
    wrapper.setProps({ isOpen: true })
    expect(wrapper.prop('className')).toEqual('back-drop open');
  })

  it('run function openMenuHandler when user click a button', () => {
    wrapper.find('div').simulate('click');
    expect(openMenuHandlerMock).toHaveBeenCalled()
  })

})