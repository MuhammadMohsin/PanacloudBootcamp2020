import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDqb2OJvwup9AlTTMVWlP7KiSEXMiy2mGk",
    authDomain: "notificationapp-54b09.firebaseapp.com",
    databaseURL: "https://notificationapp-54b09.firebaseio.com",
    projectId: "notificationapp-54b09",
    storageBucket: "notificationapp-54b09.appspot.com",
    messagingSenderId: "97986726135",
    appId: "1:97986726135:web:a2fedc0b07d1975f07abf2"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}