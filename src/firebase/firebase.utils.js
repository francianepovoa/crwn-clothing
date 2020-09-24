//Initialize firebase
import firebase from "firebase/app";

//import from yarn firebase installed
import "firebase/firestore";
import "firebase/auth";

//Code from firebase site
const config = {
	apiKey: "AIzaSyC0tDYSFPvrhVD7ezjgmanJ3jmKThMFw4g",
	authDomain: "crwn-db-bdb7e.firebaseapp.com",
	databaseURL: "https://crwn-db-bdb7e.firebaseio.com",
	projectId: "crwn-db-bdb7e",
	storageBucket: "crwn-db-bdb7e.appspot.com",
	messagingSenderId: "376737762320",
	appId: "1:376737762320:web:ceac6781ef600440e90e95",
	measurementId: "G-CK6GKG9W73",
};

//Compile firebase code
firebase.initializeApp(config);

// Give the access to files
export const auth = firebase.auth();

//Give access to stored files
export const firestore = firebase.firestore();

//Give authentication access using Google account
const provider = new firebase.auth.GoogleAuthProvider();

//Always trigger popup when use GoogleAuthProvider for login using google account
provider.setCustomParameters({ prompt: "select_account" });

//Export just the google account
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//If want export whole library
export default firebase;
