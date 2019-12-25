import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignOut extends Component {
    render() {
        localStorage.removeItem('LoginInfo')
        return (
            <div>
                <Redirect to="/" />
            </div>
        );
    }
}

export default SignOut;