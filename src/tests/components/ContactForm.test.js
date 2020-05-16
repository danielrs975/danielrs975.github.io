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

test('should show error message if a field is missing', () => {

})