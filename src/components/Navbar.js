import React from 'react';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate();

    const logoutHandler = async () =>{
        await auth.signOut();
        navigate("/");
    }
    return (
        <div className={styles.navbar_container}>
            <div className={styles.title}>
                Messenger
            </div>

            <div onClick={logoutHandler} className={styles.logout}>
                Logout
            </div>
            
        </div>
    );
};

export default Navbar;