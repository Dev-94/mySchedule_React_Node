import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
// import './SignupPage.css';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' }
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    render() {
        return (
            <div className='SignupPage'>
                <SignupForm {...this.props} updateMessage={this.updateMessage} />
                <p>{this.state.message}</p>
                <p>dogs</p>
            </div>
        );
    }
}

export default SignupPage;

//message is not state in this app