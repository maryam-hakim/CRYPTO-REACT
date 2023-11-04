import React from 'react';
import google from '../assets/google.svg';
import firebase from 'firebase/app'
import { auth } from '../firebase';
import styles from './login.module.css';

const Login = () => {
    return (
        <div>
            <div className={styles.container}>

                <h2>Welcome to Messenger!</h2>
                <div
                className={styles.button}
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                <img src={google}></img>
                Sign in with Google
                </div>

                </div>        
        </div>
    );
};

export default Login;