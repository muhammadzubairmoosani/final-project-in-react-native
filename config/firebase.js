import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCKfRmGuKLChvi7D1afSN7EGsmX9ghmDAI",
    authDomain: "moosanitechnologies-45f2e.firebaseapp.com",
    databaseURL: "https://moosanitechnologies-45f2e.firebaseio.com",
    projectId: "moosanitechnologies-45f2e",
    storageBucket: "moosanitechnologies-45f2e.appspot.com",
    messagingSenderId: "494575689436",
    appId: "1:494575689436:web:b0058ad49b3396980e1e19",
    measurementId: "G-L7CFKLKGYF"
};

firebase.initializeApp(firebaseConfig);

export default firebase;