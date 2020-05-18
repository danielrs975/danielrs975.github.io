import React from 'react'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default class ContactForm extends React.Component {
    state = {
        email: '',
        subject: '',
        message: '',
        errorEmail: ''
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState({ email });
    }
    onSubjectChange = (e) => {
        const subject = e.target.value;
        this.setState({ subject });
    }
    onMessageChange = (e) => {
        const message = e.target.value;
        this.setState({ message });
    }
    onSubmit = (e) => {
        e.preventDefault();
        let errorEmail = '', errorSubject = '', errorMessage = '';
        if (!this.state.email) {
            errorEmail = 'This field is required';
            this.setState({ errorEmail });
        }
        if (!this.state.errorSubject) {
            errorSubject = 'This field is required';
            this.setState({ errorSubject });
        }
        if (!this.state.errorMessage) {
            errorMessage = 'This field is required';
            this.setState({ errorMessage });
        }

        if (!errorEmail && !errorSubject && !errorMessage) {
            this.setState({
                errorEmail,
                errorSubject,
                errorMessage
            });
            console.log('Sending message: ', this.state);
        }
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
                    className="form-field"
                    helperText={this.state.errorEmail}
                />
                <TextField
                    error={!!this.state.errorSubject} 
                    variant="filled" 
                    label="Subject" 
                    value={this.state.subject} 
                    onChange={this.onSubjectChange} 
                    className="form-field" 
                    helperText={this.state.errorSubject}
                />
                <TextField
                    error={!!this.state.errorMessage}
                    variant="filled" 
                    label="Message" 
                    value={this.state.message} 
                    onChange={this.onMessageChange} 
                    className="form-field"
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
