import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDIHkFu317f_2xK1LgQiBWkmCDbkmlWzH0',
  authDomain: 'pomeranian-basic-form-e3bd6.firebaseapp.com',
  projectId: 'pomeranian-basic-form-e3bd6',
  storageBucket: 'pomeranian-basic-form-e3bd6.appspot.com',
  messagingSenderId: '1047449311973',
  appId: '1:1047449311973:web:304fdbb80efc6de5c5920c',
};

export const FirebaseApp = initializeApp(firebaseConfig);
