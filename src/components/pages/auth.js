import React, { Component } from 'react'
import Login from '../../components/auth/login'
import loginImg from '../../../static/assets/images/login.jpg'

export default class Auth extends Component {
    constructor() {
        super()

    }

    render() {  
        return (
            <div className="auth-page-wrapper">

                <div 
                    className="left-column" 
                    style={{
                        backgroundImage: `url( ${loginImg} )`
                    }}
                />

                <div className="right-column">
                        <Login />
                </div>

            </div>
        )
    }   
}
