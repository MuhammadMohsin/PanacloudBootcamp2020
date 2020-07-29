importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

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
  firebase.messaging();