import firebase from  "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp(
    {
        apiKey: "AIzaSyBpYKbL1VlUXlpEnP3xsM5q07VmAswzEBY",
        authDomain: "messenger-fb120.firebaseapp.com",
        projectId: "messenger-fb120",
        storageBucket: "messenger-fb120.appspot.com",
        messagingSenderId: "756393274822",
        appId: "1:756393274822:web:1378f02f4c322497d216c7"
      }
).auth();

