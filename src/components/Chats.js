import React ,{useState , useEffect , useContext}from 'react';
import Navbar from './Navbar';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
import {AuthContext} from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom'

const Chats = () => {
    const [loading , setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect( () => {
        if(!user){
            navigate("/");
            return;
        }
        axios.get("https://api.chatengine.io/users/me" , {
            headers:{
                "project-id": "514a7f82-1bfa-4210-9811-19c63cc42959",
                "user-name": user.email,
                "user-secret": user.uid
            }
        }).then(() => {
            setLoading(false);
        })
        .catch( () =>{
            let formData = new FormData();
            formData.append("email" , user.email);
            formData.append("username" , user.email);
            formData.append("secret" , user.uid);
            getFile(user.photoURL)
            .then(avatar => {
                formData.append("avatar" , avatar , avatar.name)
                axios.post("https://api.chatengine.io/users/" , formData , {
                    headers : {
                        "private-key": "8c1453ee-25fd-4ea5-8a6e-c9e0aec573d1"
                    }
                })
                .then(() => setLoading(false))
                .catch(error => console.log(error))
            }

            )
        }

        )
    },[user , navigate]

    )

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data] , "userPhoto.jpg" , {type: "image/jpeg"})
    }

    if(!user || loading) return "Loading..."
    return (
        <div>
            <Navbar />
            <ChatEngine
            height="calc(100vh - 70px)"
            projectID="514a7f82-1bfa-4210-9811-19c63cc42959"
            userName={user.email}
            userSecret={user.uid}
             />
            
        </div>
    );
};

export default Chats;