var firebaseConfig = {
    apiKey: "AIzaSyDf8TCSrfGkZgT7zaeQ6xJ4Q6Ce0Vfp-Kw",
    authDomain: "login-nodejs-ff11e.firebaseapp.com",
    databaseURL: "https://login-nodejs-ff11e.firebaseio.com",
    projectId: "login-nodejs-ff11e",
    storageBucket: "login-nodejs-ff11e.appspot.com",
    messagingSenderId: "562756375356",
    appId: "1:562756375356:web:8d24cfda7569116ca1c439",
    measurementId: "G-ZQ63VNT1MD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth=firebase.auth();
const fs=firebase.firestore();

// events
// list for auth state changes
auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("signin");
      
    } else {
      console.log("signout");
     ;
    }
  });