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

//Create a function for a profile document in firestore library
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

//Create a new  function for a collection document with shop items in firestore library
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

//Create a new function to convert an object instead of an array
export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
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
