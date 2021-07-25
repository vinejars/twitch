import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from './config';

const Firebase: any = firebase.initializeApp(config.firebase);

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export const auth = firebase.auth();
export default Firebase;