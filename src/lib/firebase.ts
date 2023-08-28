'use client'

import { initializeApp } from 'firebase/app'
import { getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA07GkjSaogBo8KQp_A1hPRByEGzSF_8ME',
  authDomain: 'fnlacne.firebaseapp.com',
  databaseURL:
    'https://fnlacne-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'fnlacne',
  storageBucket: 'fnlacne.appspot.com',
  messagingSenderId: '949656490448',
  appId: '1:949656490448:web:7d2537d1df1ea2c0d3e9d5',
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }
