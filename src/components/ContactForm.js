import React from 'react'
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default class ContactForm extends React.Component {
    state = {
        email: '',
        subject: '',
        message: ''
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
    }

    render() {
        return (
            <form className="contact-me__form" autoComplete="off" onSubmit={this.onSubmit}>
                <TextField variant="filled" label="E-mail" value={this.state.email} onChange={this.onEmailChange} className="form-field" />
                <TextField variant="filled" label="Subject" value={this.state.subject} onChange={this.onSubjectChange} className="form-field" />
                <TextField variant="filled" label="Message" value={this.state.message} onChange={this.onMessageChange} className="form-field" />
                <Button variant="contained" className="button button--sent">
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                    <p>Sent</p>
                </Button>
            </form>
        )
    }
}
