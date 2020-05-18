/**
 * Tests for the Contact Form
 */
import React from 'react'
import { shallow } from 'enzyme';

import ContactForm from '../../components/ContactForm';

let wrapper;
beforeEach(() => {
    wrapper = shallow(<ContactForm />);
})


test('should render ContactForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should show a required message if the fields are empty', () => {
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper).toMatchSnapshot();
})