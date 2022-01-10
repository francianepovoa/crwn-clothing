/*
It imports the firebase library.
*/
import firebase from "firebase/app";

/*
1. Importing firebase/firestore and firebase/auth modules from the Firebase JS SDK.
2. Initializing Firebase with the Firebase SDK snippet from the Firebase console.
3. Declaring the firebase variable and assigning it to the firebase object from the Firebase JS SDK.
4. Declaring the firestore variable and assigning it to the firestore object from the Firebase JS SDK.
5. Declaring the auth variable and assigning it to the auth object from the Firebase JS SDK.
*/
import "firebase/firestore";
import "firebase/auth";

//Code from firebase site
/*
1. It’s creating a firebase app with the config object.
2. It’s creating a firebase database with the databaseURL.
3. It’s creating a firebase storage with the storageBucket.
4. It’s creating a firebase messaging with the messagingSenderId.
5. It’s creating a firebase appId with the appId.
6. It’s creating a firebase measurementId with the measurementId.
*/
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

/*
1. We’re creating a userRef variable that points to the user’s document in the firestore database.
2. We’re creating a snapShot variable that holds the data from the user’s document.
3. We’re checking if the user’s document exists. If it doesn’t, we’re creating a new document in the users collection with the user’s uid.
4. We’re setting the user’s displayName, email, and createdAt values.
5. We’re returning the userRef variable.
*/
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

/*
1. First, we create a collection reference to the collection we want to add to.
2. Then, we create a batch object.
3. Next, we iterate over the objects we want to add and create a document reference for each one.
4. Then, we add each document to the batch.
5. Finally, we commit the batch.
*/
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

/*
1. We’re mapping over the collections snapshot and returning an object with the following properties:
	- routeName: the title of the collection converted to lowercase and with spaces replaced by dashes
	- id: the id of the collection document
	- title: the title of the collection
	- items: an array of items from the collection
*/
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

	/*
	It takes a collection of objects and transforms it into a different collection of objects.
	*/
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

/*
It initializes the firebase app with the configuration specified in the config file.
*/
firebase.initializeApp(config);

/*
1. First, we’re subscribing to the auth state change event.
2. Then, we’re calling the onAuthStateChanged method, which is a method provided by the firebase auth library.
3. The onAuthStateChanged method takes two parameters:
	a. A callback function that gets called when the user’s auth state changes.
	b. A callback function that gets called if an error occurs.
4. The onAuthStateChanged method returns an unsubscribe function.
5. We’re storing the unsubscribe function in a variable called unsubscribe.
6. Then, we’re calling the unsubscribe function to unsubscribe from the auth state change event.
7. Finally, we’re resolving the promise with the user’s auth state.
*/
export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

/*
It creates a new instance of the firebase auth object.
*/
export const auth = firebase.auth();

/*
It creates a firebase instance and a firestore instance.
*/
export const firestore = firebase.firestore();

/*
It creates a new instance of the GoogleAuthProvider class.
*/
export const googleProvider = new firebase.auth.GoogleAuthProvider();

/*
The above code sets the prompt parameter to "select_account" to force the Google login page to display the Google account selection interface.
*/
googleProvider.setCustomParameters({ prompt: "select_account" });

/*
It signs in a user with Google.
*/
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

/*
It exports the firebase object from the firebase module.
*/
export default firebase;
