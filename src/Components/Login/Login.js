import React, { Component } from 'react';
import AxiosConfig from '../../Axios/AxiosConfig';

import './LoginStyle.css'

class Login extends Component {

    txtUN = '';
    txtUP = '';

    GoLogin = () => {

        if (this.txtUN.value === '' || this.txtUP.value === '') {
            alert('نام کاربری یا رمزعبور وارد نشده است')
            return
        }

        let data = {
            Email: this.txtUN.value,
            Password: this.txtUP.value
        }

        AxiosConfig.post("/user/login", data)
            .then(
                (response) => {
                    localStorage.setItem('LoginInfo', JSON.stringify(response.data))

                    this.props.history.push('/ArticleList')
                    console.log(this.props.match)
                }
            )
            .catch(
                (error) => (console.log('Login Failed', error))
            )
    }
    render() {
        return (
            <div>
                <div className="LoginPanel">
                    <label id="lblUN">نام کاربری</label>
                    <input
                        defaultValue="ali@ali.com"
                        ref={el => this.txtUN = el}
                        type="text"
                        placeholder="نام کاریری را وارد کنید" />
                    <br />
                    <label id="lblUP">رمز عبور</label>
                    <input
                        defaultValue="1234"
                        ref={el => this.txtUP = el}
                        type="text"
                        placeholder="رمز عبور را وارد کنید" />
                    <br />
                    <button id="btnLogin" onClick={this.GoLogin}>ورود</button>
                </div>
            </div>
        );
    }
}

export default Login;