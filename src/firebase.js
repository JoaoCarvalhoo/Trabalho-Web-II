import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDg-zYLl3nOJXo6tBoVFwXUZhPDSzqJNHI",
  authDomain: "app-react-crud-1addb.firebaseapp.com",
  projectId: "app-react-crud-1addb",
  storageBucket: "app-react-crud-1addb.appspot.com",
  messagingSenderId: "250540825904",
  appId: "1:250540825904:web:c9bd1ac3b9d2e083253cf5"
};
  // Initialize Firebase
let fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref()
