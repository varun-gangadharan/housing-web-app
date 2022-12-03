import './App.css';
import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../../firebase.js';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import axios from 'axios';
import './Signin.scss';
import { Redirect } from 'react-router-dom'
import { Message } from 'semantic-ui-react'

class Signin extends Component{
    state = {
        isSignedIn: false,
        willRedirect: false
    };
    handleSuccessfulSignIn = () => {
		this.setState({willRedirect: true});
	}
}


export default Signin;