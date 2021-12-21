import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

const config = {
	apiKey: 'AIzaSyDFqS0pAVEQNYCkjmGEcWz0JNIT4A4Ue_g',
	authDomain: 'netflix-af0f2.firebaseapp.com',
	projectId: 'netflix-af0f2',
	storageBucket: 'netflix-af0f2.appspot.com',
	messagingSenderId: '883796721444',
	appId: '1:883796721444:web:61f1a3b08f96bc25c8fdb1'
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
