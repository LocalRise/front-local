import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCg9FmnpMda9CwWwsermB6C5N2fxDGVzrk',
  authDomain: 'home-run-lampange.firebaseapp.com',
  databaseURL: 'https://home-run-lampange.firebaseio.com',
  projectId: 'home-run-lampange',
  storageBucket: 'home-run-lampange.appspot.com',
  messagingSenderId: '958192975041',
  appId: '1:958192975041:web:33c5d0593350a6022e6840',
  measurementId: 'G-LKVZE64BVC',
}

export default firebase.initializeApp(firebaseConfig)
