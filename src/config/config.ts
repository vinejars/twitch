const config = {
  firebase: {
    apiKey: process.env.FIREBASE_PROJECT_ID,
    authDomain: process.env.FIREBASE_API_KEY,
    projectId: process.env.FIREBASE_AUTH_DOMAIN,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
    appId: process.env.FIREBASE_APP_ID,
  },
};


export default config;