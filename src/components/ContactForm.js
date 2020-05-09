import React from 'react'

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
            <form className="contact-me__form" onSubmit={this.onSubmit}>
                <div>
                    <input type="text" placeholder="E-mail" value={this.state.email} onChange={this.onEmailChange} />
                </div>
                <div>
                    <input type="text" placeholder="Subject" value={this.state.subject} onChange={this.onSubjectChange} />
                </div>
                <div>
                    <input type="text" placeholder="Message" value={this.state.message} onChange={this.onMessageChange} />
                </div>
                <button>Sent</button>
            </form>
        )
    }
}
