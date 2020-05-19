import React from 'react'
import validator from 'validator';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import error from '../fixtures/errorMessages';

export default class ContactForm extends React.Component {
    state = {
        email: '',
        subject: '',
        message: '',
        errorEmail: '',
        errorSubject: '',
        errorMessage: ''
    }
    validateEmail = () => {
        let errorMsg = '';
        if (!this.state.email) {
            errorMsg = error.required;
        } else if (!validator.isEmail(this.state.email)) {
            errorMsg = error.badEmail;
        }
        return errorMsg;
    }
    validateSubject = () => {
        let errorMsg = '';
        if (!this.state.subject) {
            errorMsg = error.required;
        }
        return errorMsg;
    }
    validateMessage = () => {
        let errorMsg = '';
        if (!this.state.message) {
            errorMsg = error.required;
        }
        return errorMsg;
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        const errorEmail = '';
        this.setState({ email, errorEmail });
    }
    onSubjectChange = (e) => {
        const subject = e.target.value;
        const errorSubject = '';
        this.setState({ subject, errorSubject });
    }
    onMessageChange = (e) => {
        const message = e.target.value;
        const errorMessage = ''
        this.setState({ message, errorMessage });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const errorEmail = this.validateEmail();
        const errorSubject = this.validateSubject();
        const errorMessage = this.validateMessage();
        
        if (!errorEmail && !errorSubject && !errorMessage) {
            console.log('Sending message: ', this.state);
        }
        this.setState({
            errorEmail,
            errorSubject,
            errorMessage
        });
    }

    render() {
        return (
            <form className="contact-me__form" onSubmit={this.onSubmit}>
                <TextField
                    error={!!this.state.errorEmail}
                    variant="filled" 
                    label="Your e-mail" 
                    value={this.state.email} 
                    onChange={this.onEmailChange} 
                    className={!!this.state.errorEmail? 'form-field error': 'form-field'}
                    helperText={this.state.errorEmail}
                />
                <TextField
                    error={!!this.state.errorSubject} 
                    variant="filled" 
                    label="Subject" 
                    value={this.state.subject} 
                    onChange={this.onSubjectChange} 
                    className={!!this.state.errorSubject? 'form-field error': 'form-field'} 
                    helperText={this.state.errorSubject}
                />
                <TextField
                    error={!!this.state.errorMessage}
                    variant="filled" 
                    label="Message" 
                    value={this.state.message} 
                    onChange={this.onMessageChange} 
                    className={!!this.state.errorMessage? 'form-field error': 'form-field'}
                    helperText={this.state.errorMessage}
                />
                <Button type="submit" variant="contained" className="button button--sent">
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                    <p>Sent</p>
                </Button>
            </form>
        )
    }
}
